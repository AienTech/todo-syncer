import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { AppController } from './app.controller';
import { TodoResolver } from './todo/todo.resolver';
import { ListResolver } from './list/list.resolver';
import { MsGraphService } from './ms-graph/ms-graph.service';
import { TodoService } from './todo/todo.service';
import { MsGraphController } from './ms-graph/ms-graph.controller';
import { MockThirdPartyService } from './mock-third-party/mock-third-party.service';
import { MockThirdPartyController } from './mock-third-party/mock-third-party.controller';
import { ApiService } from './mock-third-party/api/api.service';
import * as session from 'express-session';
import { ScheduleModule } from '@nestjs/schedule';
import { MutexService } from './mutex/mutex.service';
import { ListService } from './list/list.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      installSubscriptionHandlers: true,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      context: ({ req }) => ({ req }),
    }),
    ScheduleModule.forRoot(),
  ],
  controllers: [MsGraphController, MockThirdPartyController],
  providers: [
    // services
    AppService,
    PrismaService,
    MsGraphService,
    TodoService,
    MockThirdPartyService,
    ApiService,
    MutexService,
    ListService,

    // resolvers
    TodoResolver,
    ListResolver,

    // controllers
    AppController,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          secret: 'very-very-secret-interview',
          resave: false,
          saveUninitialized: false,
          cookie: {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000,
          },
        }),
      )
      .forRoutes({
        path: '*',
        method: RequestMethod.ALL,
      });
  }
}
