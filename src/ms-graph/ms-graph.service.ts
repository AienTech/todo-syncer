import { Injectable } from '@nestjs/common';
import { ConfidentialClientApplication, Configuration } from '@azure/msal-node';
import { ConfigService } from '@nestjs/config';
import { Client } from '@microsoft/microsoft-graph-client';

@Injectable()
export class MsGraphService {
	private readonly msalConfig: Configuration;
	private readonly msalClient: ConfidentialClientApplication;

	public readonly scopes: string[] = ['https://graph.microsoft.com/.default'];
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
		};

		this.msalClient = new ConfidentialClientApplication(this.msalConfig);

		this.redirectUri = this.configService.get(
			'OAUTH_REDIRECT_URI',
			'http://localhost:3000/ms-graph/callback',
		);
	}

	public GraphClient(userId: string): Client {
		const client = Client.init({
			authProvider: async (done) => {
				try {
					const account = await this.msalClient
						.getTokenCache()
						.getAccountByHomeId(userId);

					if (!account) {
						done('account not defined', null);
						return;
					}

					const response = await this.msalClient.acquireTokenSilent({
						scopes: this.scopes,
						account,
					});

					done(null, response.accessToken);
				} catch (err) {
					console.error(err);
					done(err, null);
				}
			},
		});

		return client;
	}

	public get MsalClient(): ConfidentialClientApplication {
		return this.msalClient;
	}
}
