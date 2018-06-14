// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgres://localhost/galvanize-memory/version-1'
    }
  },
  test: {
    client: 'pg',
    connection: {
      filename: 'postgres://localhost/galvanize-memory/test-version-1'
    }
  },
  production: {
    client: 'pg',
    connection: {
      filename: process.env.DATABASE_URL
    }
  }
};
