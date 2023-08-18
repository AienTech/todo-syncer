import { Controller, Get, Logger, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { MsGraphService } from './ms-graph.service';
import { MsGraphCallbackQuery } from './ms-graph.interface';
import { ConfigService } from '@nestjs/config';
import { Client } from '@microsoft/microsoft-graph-client';

@Controller('ms-graph')
export class MsGraphController {
  constructor(
    private readonly msService: MsGraphService,
    private readonly configService: ConfigService,
  ) {}

  @Get('/sign-in')
  async signIn(@Res() res: Response) {
    const urlParameters = {
      scopes: this.msService.scopes,
      redirectUri: this.msService.redirectUri,
    };

    try {
      const authUrl = await this.msService.MsalClient.getAuthCodeUrl(
        urlParameters,
      );
      res.redirect(authUrl);
    } catch (error: any) {
      Logger.error(error);
      res.redirect('/');
    }
  }

  @Get('/callback')
  async callback(
    @Req() req: Request,
    @Res() res: Response,
    @Query() query: MsGraphCallbackQuery,
  ) {
    const tokenRequest = {
      code: query.code,
      scopes: this.msService.scopes,
      redirectUri: this.msService.redirectUri,
    };

    try {
      const response = await this.msService.MsalClient.acquireTokenByCode(
        tokenRequest,
      );

      const { homeAccountId } = response.account;

      req.session['userId'] = homeAccountId;

      req.session.save((err) => {
        if (!err) {
          this.msService.client = Client.init({
            authProvider: async (done) => {
              try {
                const account =
                  await this.msService.MsalClient.getTokenCache().getAccountByHomeId(
                    homeAccountId,
                  );

                if (!account) {
                  done('account not defined', null);
                  return;
                }

                const response =
                  await this.msService.MsalClient.acquireTokenSilent({
                    scopes: this.msService.scopes,
                    account,
                  });

                console.log(response.accessToken);

                done(null, response.accessToken);
              } catch (err) {
                done(err, null);
              }
            },
          });

          res.redirect('/graphql');
        } else {
          res.json(err);
        }
      });

      return;
    } catch (error) {
      res.sendStatus(500).send('error');
    }
  }
}
