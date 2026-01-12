const express = require("express");
const Contact = require("../models/contactUs.model");

const router = express.Router();

router.get("/getSubmissions", async (req, res) => {
    try {
      const contacts = await Contact.find();
  
      return res.status(200).json({
        success: true,
        message: "Contact list fetched successfully",
        data: contacts,
      });
    } catch (error) {
      console.error(error);
  
      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  });
  
  module.exports = router;