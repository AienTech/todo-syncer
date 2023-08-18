import { Injectable, Logger } from '@nestjs/common';
import { ConfidentialClientApplication, Configuration } from '@azure/msal-node';
import { ConfigService } from '@nestjs/config';
import { Client } from '@microsoft/microsoft-graph-client';

@Injectable()
export class MsGraphService {
  private readonly msalConfig: Configuration;
  private readonly msalClient: ConfidentialClientApplication;
  public client: Client;

  public readonly scopes: string[] = [
    'Tasks.Read',
    'Tasks.ReadWrite',
    'User.Read',
    'User.ReadWrite',
    'email',
    'openid',
    'profile',
    'Calendars.Read',
    'OrgSettings-Todo.Read.All',
  ];
  public readonly redirectUri: string;

  constructor(private readonly configService: ConfigService) {
    this.msalConfig = {
      auth: {
        clientId: configService.getOrThrow('OAUTH_CLIENT_ID') || '',
        clientSecret: configService.getOrThrow('OAUTH_CLIENT_SECRET'),
        authority: `https://login.microsoftonline.com/${this.configService.getOrThrow(
          'OAUTH_TENANT_ID',
        )}`,
      },
      system: {
        loggerOptions: {
          loggerCallback(loglevel, message, containsPii) {
            Logger.debug(message, 'MsGraphService');
          },
          piiLoggingEnabled: false,
          logLevel: 3,
        },
      },
    };

    this.msalClient = new ConfidentialClientApplication(this.msalConfig);

    this.redirectUri = this.configService.get(
      'OAUTH_REDIRECT_URI',
      'http://localhost:3000/ms-graph/callback',
    );
  }

  public get MsalClient(): ConfidentialClientApplication {
    return this.msalClient;
  }
}
