const path = require('path');

const config = {
  port: process.env.PORT || 3000,
  webUrl: process.env.WEB_URL,
  db: {
    uri: process.env.DB_URI,
    debug: process.env.MONGOOSE_DEBUG === 'true',
  },
  appName: 'Test',
  appSecret: '76211hhhiku',
  logPath: process.env.LOG_PATH || path.resolve(__dirname, 'logs'),
  sentryDns: process.env.SENTRY_DNS || false,
  mail: {
    transport: {
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT, 10),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PWD,
      },
    },
    autoEmail: 'noreply@demo.com',
    adminEmail: 'admin@demo.com',
  },
  accessTokenLifeTime: '3h',
  resetPasswordTokenLifeTime: '10m',
  s3Config: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: process.env.AWS_BUCKET,
    region: process.env.AWS_REGION,
    websiteEndpoint: process.env.S3_WEB_ENDPOINT,
    objectKeyPrefix: 'student/',
  },
};

module.exports = config;
