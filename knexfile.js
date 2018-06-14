// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgres://localhost/resolutions-1'
    }
  },
  test: {
    client: 'pg',
    connection: {
      filename: 'postgres://localhost/test-resolutions-1'
    }
  },
  production: {
    client: 'pg',
    connection: {
      filename: process.env.DATABASE_URL
    }
  }
};
