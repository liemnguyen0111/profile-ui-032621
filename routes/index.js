// Dependencies
const router = require('express').Router()

// Middlewares
router.use('/api', require("./profileRoutes.js"))

// Export
module.exports = router

