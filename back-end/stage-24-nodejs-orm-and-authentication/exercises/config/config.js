module.exports = {
  "development": {
    "username": process.env.MYSQL_USER || "root",
    "password": proess.env.MYSQL_PASS || null,
    "database": proess.env.MYSQL_DB || "database_development",
    "host": proess.env.MYSQL_HOST || "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
