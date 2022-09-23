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
   

        app.post = async (req, res, next) => {

            const { name, email, username, password } = req.body;
        
            const user = await User.findOne({
                $or: [{ email }, { username }]
            });
            if (user) {
                if (user.username === username) {
                    return next(new ErrorHandler("Username already exists", 401));
                }
                return next(new ErrorHandler("Email already exists", 401));
            }
        
            const newUser = await User.create({
                name,
                email,
                username,
                password,
                avatar: req.file.location
            })
        
            send(newUser, 201, res);
        };
        
        // Login User
        app.post = async (req, res, next) => {
        
            const { userId, password } = req.body;
        
            const user = await User.findOne({
                $or: [{ email: userId }, { username: userId }]
            }).select("+password");
        
            if (!user) {
                return next(new ErrorHandler("User doesn't exist", 401));
            }
        
            const isPasswordMatched = await user.comparePassword(password);
        
            if (!isPasswordMatched) {
                return next(new ErrorHandler("Password doesn't match", 401));
            }
        
            res.send(user, 201, res);
        };
        
           


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
        app.get('/donors', async (req, res) => {
            const query = {};
            const donors = donorsCollection.find();
            const products = await donors.toArray();
            res.send(products.reverse());
        });
        // GET
        app.get('/donor/:id', async (req, res,next) => {
            const id = req.params.id;
            try{
            const query = { _id: ObjectId(id) };
            if(query){
                const donor = await donorsCollection.findOne(query);
                res.send(donor);
            }}catch{
                res.status(404).send({ message: 'Not Found' });  
            }

            next()
        });

        app.get('/search/:slug', async (req, res) => {
            const slug = req.params.slug;
            
            if (slug) {
                const query = { blood: slug };
                const cursor = donorsCollection.find(query);
                const donors = await cursor.toArray();
                res.send(donors);
            }
            else{
                res.status(403).send({message: 'forbidden access'})
            }
        })



    }
    finally {

    }
}

run().catch('s',console.dir);


app.get('/', (req, res) => {
    res.send('Running EBlood Server');
});
app.listen(port, () => {
    console.log('Listening to port', `http//localhost:${port}`);
})