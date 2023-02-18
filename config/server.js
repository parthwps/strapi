module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3001),
  url:"https://strapi.ulfbuilt.com:1337",
  app: {
    keys: env.array('APP_KEYS'),
  },
});
