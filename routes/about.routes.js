const About = require('../models/about.model');

const express = require('express');
const router = express.Router();

// Handle form data (POST, PUT)
const formData = require('express-form-data');
router.use( formData.parse() )

// ---- GET DATA
// -----------------------------------

// localhost:PORT/about
router.get( '/', async (req, res) => {

    console.log('GET about')

    try {

        let about = await About.findOne();

        if ( about == null ) {  return res.status( 404 ).json( { message: 'About not found!' } ) }

        return res.status( 200 ).json( about )

    } catch (error) {

        console.log( "ERROR:" + error )

        return res.status( 500 ).json( { message: 'Internal server error!' } )

    }

} )

// ---- EDIT DATA
// -----------------------------------
router.put( '/', async (req, res) => {

    console.log( 'PUT about' )

    try {
        let about = await About.findOneAndUpdate( {}, req.body, { new: true } );

        return res.status( 200 ).json( { message: "Edited", edited: about } )

    } catch (error) {

        console.log( "ERROR:" + error )

        return res.status( 500 ).json( { message: 'Internal server error!' } )

    }

} )


router.post( '/', async (req, res) => {

    console.log('POST about')

    try {
        let about = new About( req.body ); // req.body = data for DB (title, content)

        await about.save(); // Save in DB

        return res.status( 200 ).json( { message: "Created", created: about } )

    } catch (error) {

        console.log( "ERROR:" + error )

        return res.status( 500 ).json( { message: 'Internal server error!' } )

    }

} )


module.exports = router;