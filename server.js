const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4011;


// ---- Mongo & Mongoose
// ------------------------------------------

const mg = require('mongoose');

// Local DB
mg.connect(process.env.DB_URL_EXT, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mg.connection; // Connect to DB
db.on('error', (error) => console.log("ERROR: " + error))
db.once('open', (  ) => console.log("/// ----> MongoDB ready! "))

// ---- APP
// ------------------------------------------

app.use( express.json() ); // Handle JSON data
app.use( express.urlencoded( { extended: true } ) ) // Handle URLEncoded data




// ---- SESSION
// ------------------------------------------





// ---- ROUTES
// ------------------------------------------

// "Landing page"
app.get('/', async (req, res) => {
    console.log('Server endpoint')
    return res.status(200).json({ message: 'SERVER OK' })
})

app.use('/about', require('./routes/about.routes'))



// ---- LISTEN
// ------------------------------------------

app.listen(PORT, () => {
    console.log("/// ----> Listening on port: " + PORT)
})