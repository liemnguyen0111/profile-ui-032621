const router = require("express").Router();

// Get route
router.get("/profile", (req, res) => {
  res.status(200).send("Hello");
});

// Create route
router.post("/profile", (req, res) => {
  res.status(200).send("Hello");
});

// Update route
router.put("/profile", (req, res) => {
  res.status(200).send("Hello");
});

// Delete route
router.delete("/profile", (req, res) => {
  res.status(200).send("Hello");
});

module.exports = router