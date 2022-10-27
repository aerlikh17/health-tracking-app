const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on('connected', function(err) {
  if(err) console.log(err);
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

module.exports = db;