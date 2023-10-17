const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "csc301",
    database: "summercampdatabase"
});

module.exports = client