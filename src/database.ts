var pg = require('pg');
require('dotenv').config();
var connString = process.env.DATABASE_URL;

var client = new pg.Client(connString);
client.connect((err:Error)=>{
   if(err){
    console.log('Connection error');
   }
   else{
    console.log('Database Connected');
   }
});


module.exports = client;