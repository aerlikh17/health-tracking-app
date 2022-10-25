const mongoose = require('mongoose');

console.log(process.env.DATABASE_URL);
mongoose.connect('mongodb://127.0.0.1:27017/customers', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection;

db.on('connected', function(err) {
  if(err) console.log(err);
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

module.exports = db;