export const APP_NAME = 'React App';
export const API_URL = '/api/v1';
export const REQUEST_TIMEOUT = 30000;
export const ALERT_DISPLAY_DURATION = 2000;
export const { ENVIRONMENT, SENTRY_DNS } = process.env || {
  'process.env.ENVIRONMENT': JSON.stringify('production'),
  'process.env.SENTRY_DNS': JSON.stringify('https://1f4bf702246d45d28e4f0d24d17832ca@sentry.io/264486'),
};
