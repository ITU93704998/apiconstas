const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//banco de dados
mongoose.connect('mongodb+srv://bancomongo:bancomongo@cluster0-upyye.mongodb.net/nodeapi?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

requireDir('./src/models');



//primeira rota
app.use('/api', require("./src/routes"));

app.listen(3001);