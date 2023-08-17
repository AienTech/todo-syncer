import { Controller, Get, Logger, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { MsGraphService } from './ms-graph.service';
import { MsGraphCallbackQuery } from './ms-graph.interface';
import { ConfigService } from '@nestjs/config';

@Controller('ms-graph')
export class MsGraphController {
  constructor(
    private readonly msService: MsGraphService,
    private readonly configService: ConfigService,
  ) { }

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

      req.session['userId'] = response.account.homeAccountId;

      req.session.save((err) => {
        if (!err)
          res.redirect('/graphql');
        else
          res.send(err);
      });


    } catch (error) {
      res.sendStatus(500).send('error');
    }
  }
}
