const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const password = 'dWxD3BVuV92M';

// const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://testingDBuser:dWxD3BVuV92M@cluster0.eftco.mongodb.net/testingDBuserName?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})


client.connect(err => {
    const productCollection = client.db("testingDBuserName").collection("testingCollection");
    
    app.post("/addProduct",(req, res) => {
        const product = req.body;
        console.log(product);
    })
});


app.listen(3000);