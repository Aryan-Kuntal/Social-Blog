const env = require("dotenv");
const { MongoClient } = require("mongodb");

env.config()
const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString,);

const establishConnection = async () => {
  
    let conn;

  try {
    conn = await client.connect();
  } catch (e) {
    console.error(e);
  } 
    
  return conn.db(process.env.DB)
};

let database = establishConnection()

console.log('database connected')

module.exports = database;
