var express = require('express')
var cors = require('cors')
const asyncHandler = require('express-async-handler')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(cors())
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.svnpvqt.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


app.get('/', (req, res) => {
    res.send('Running ss-manufucturer Server');
});
app.listen(port, () => {
    console.log('Listening to port', `http//localhost:${port}`);
})