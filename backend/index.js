const { app } = require('./app')
const mongoose = require('mongoose');




// Connection with mongodb
const MONGO_URL = process.env.MONGO_URL;
const connection = () => {
    mongoose.set('strictQuery', false);
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("connected to DB!");
    }).catch((err) => {
        console.log(`Error connection failed to db ${err}`);
    })
}


// Server connection
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    connection();
    console.log("connected to server!");
})