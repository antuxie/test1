import { ENV } from './../core/env.config';

interface AuthConfig {
  CLIENT_ID: string;
  CLIENT_DOMAIN: string;
  AUDIENCE: string;
  REDIRECT: string;
  SILENT_REDIRECT: string;
  SCOPE: string;
  NAMESPACE: string;
};

export const AUTH_CONFIG: AuthConfig = {
  CLIENT_ID: 'lGVngmMe2S78tEFRJVrOcssDcIeDOsYnc',
  CLIENT_DOMAIN: 'eddiezhazha.auth0.com', // e.g., kmaida.auth0.com
  AUDIENCE: 'http://localhost:8083/api/', // e.g., http://localhost:8083/api/
  REDIRECT: `${ENV.BASE_URI}/callback`,
  SILENT_REDIRECT: 'http://localhost:8083/silent', // ${ENV.BASE_URI}/silent on PRODUCTION // 'http://localhost:8083/silent'
  SCOPE: 'openid profile',
  NAMESPACE: 'http://myapp.com/roles'
};
