
const express = require( 'express' )
const fs = require( 'fs' )
const path = require( 'path' )
const React = require( 'react' )
const ReactDOMServer = require( 'react-dom/server' )

// create express application
const app = express()

// import App component
const { App } = require( '../src/App' )

// serve static assets
app.get( /\.(js|css|map|ico)$/, express.static( path.resolve( __dirname, '../build' ) ) )

// for any other requests, send `index.html` as a response
app.use( '*', async ( req, res ) => {

    // read `index.html` file
    let indexHTML = fs.readFileSync( path.resolve( __dirname, '../build/index.html' ), {
        encoding: 'utf8',
    } )

    // get HTML string from the `App` component
    let appHTML = ReactDOMServer.renderToString( <App /> )

    // populate `#app` element with `appHTML`
    indexHTML = indexHTML.replace( '<div id="root"></div>', `<div id="root">${ appHTML }</div>` )

    // set header and status
    res.contentType( 'text/html' )
    res.status( 200 )

    return res.send( indexHTML )
} )

// run express server on port 9000
app.listen( '9000', () => {
    console.log( 'Express server started at http://localhost:9000' )
} )
