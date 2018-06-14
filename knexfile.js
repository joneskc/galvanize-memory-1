// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/resolutions-1'

  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-resolutions-1'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
