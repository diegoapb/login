var pg = require('pg');
 
var config = {
  user: 'postgres', //env var: PGUSER 
  database: 'musica3', //env var: PGDATABASE 
  password: 'mysecretpassword', //env var: PGPASSWORD 
  host: '172.17.0.2', // Server hosting the postgres database 
  port: 5432, //env var: PGPORT 
  max: 10, // max number of clients in the pool 
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed 
};

var pool = new pg.Pool(config);

module.exports = pool;


