import { Environment } from './environment.interface';

export const environment = {
  hotConfig: {
    MSW_HOT_GRAPHQL_ENDPOINT: 'https://msw-server.azurewebsites.net/graphql',
    MSW_HOT_LOGIN_ENDPOINT: 'https://msw-server.azurewebsites.net/login',
  },
  production: true,
} as Environment;
