const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dindin',
    password: '3009peu',
    port: 5432
})

const query = (text, params) => {
    return pool.query(text, params);
}

module.exports = {
    query
} 