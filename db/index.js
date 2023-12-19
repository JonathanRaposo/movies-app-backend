const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/react-movies-api';
mongoose.connect(MONGODB_URI)
    .then((x) => console.log(`Connected to Mongo.Database name: ${x.connections[0].name}`))
    .catch((err) => console.log(`Error connecting to mongo: ${err}`));