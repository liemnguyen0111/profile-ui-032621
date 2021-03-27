// Dependencies
require('dotenv').config()
const express = require('express')
const app = express()
const { join } = require('path')

// Middlewares
// Serve any static files
app.use(express.static(join(__dirname, 'client', 'build')))

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "client", "build", "index.html"))
})

// API routes
app.use(require('./routes'))

// Port
const PORT = process.env.PORT || 3000

// Start connection
app.listen( PORT => console.log(`Server running on port ${PORT}`))