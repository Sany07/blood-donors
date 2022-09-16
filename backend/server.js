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

async function run() {
    try {
        await client.connect();
        const donorsCollection = client.db('blood-donor').collection('donors');
        // const orderCollection = client.db('ss-manu').collection('orders');
        // const reviewCollection = client.db('ss-manu').collection('review');
        // const userprofileCollection = client.db('ss-manu').collection('userprofile');


 


        app.get('/admin/:email', async (req, res) => {
            const email = req.params.email;
            const user = await userprofileCollection.findOne({ email: email });
            const isAdmin = user.role === 'admin';
            res.send({ admin: isAdmin })
          })




        // Donor
        app.post('/applyDonor', async (req, res) => {
            const donor = req.body;
            const result = await donorsCollection.insertOne(donor);
            
            if(result){

                res.status(201).send({status:201, message: 'Application Submitted',result });
            }else{
                return res.send({ message: "Something went wrong" });
            }
            
          });
          
        // Donors
        app.get('/products', async (req, res) => {
            const query = {};
            const cursor = productsCollection.find();
            const products = await cursor.toArray();
            res.send(products.reverse());
        });
        // GET
        // app.get('/product/:id', async (req, res,next) => {
        //     const id = req.params.id;
        //     try{
        //     const query = { _id: ObjectId(id) };
        //     if(query){
        //         const product = await productsCollection.findOne(query);
        //         res.send(product);
        //     }}catch{
        //         res.status(404).send({ message: 'Not Found' });  
        //     }

        //     next()
        // });


        // DELETE
        // app.delete('/order/:id', async (req, res,next) => {
        //     const id = req.params.id;
        //     const query = { _id: ObjectId(id) };
        //     const result = await orderCollection.deleteOne(query);
        //     res.send(result);
        //     console.log('query',query,result);
        //     next()
        // });

        // My Order Collection API  verifyJWT


        // app.post('/order', async (req, res) => {
        //     const order = req.body;
        //     const result = await orderCollection.insertOne(order);
        //     if(result){

        //         return res.send({ success: true, result });
        //     }else{
        //         return res.send({ message: "Not Found" });
        //     }
        // });

        // app.post('/review', async (req, res) => {
        //     const review = req.body;
        //     const result = await reviewCollection.insertOne(review);
        //     if(result){
        //         return res.send({ success: true, result });
        //     }else{
        //         return res.send({ message: "Error" });
        //     }
        // });



    }
    finally {

    }
}

run().catch('s',console.dir);


app.get('/', (req, res) => {
    res.send('Running ss-manufucturer Server');
});
app.listen(port, () => {
    console.log('Listening to port', `http//localhost:${port}`);
})