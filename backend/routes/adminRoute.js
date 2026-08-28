const express = require("express");

const {
  getDashboardStats,
  getAllResponses
} = require("../controllers/adminController");

const router = express.Router();

router.get("/stats", getDashboardStats);
router.get("/responses", getAllResponses);

module.exports = router;