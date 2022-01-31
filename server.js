const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 5000
const cors = require('cors')
const path = require('path')
const config = require('./config')
const favicon = require('serve-favicon')

const app = express()

app.use(express.json())
app.use(cors())


const { MongoClient } = require('mongodb');
const { MONGO_URI } = config;
const uri = MONGO_URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("hrnet").collection("employees");
    // perform actions on the collection object
    collection.insertOne()
    client.close();
});

const userRoutes = require('./routes');
// Use Routes
app.use('/api/user', userRoutes)



// Serve the static if in production
if ( process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build/'))
    // any other request than '/api/' => load 'index.html'
    app.get('*', (_, res) => { res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))})

}

app.listen(PORT, () => { console.log(`Server listening on ${PORT}`)})