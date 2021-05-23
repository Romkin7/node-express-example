const express = require('express');
const router = express.router();

router.get("/", (req ,res) => {
    return res.status(200).json({username: "John", email: "john.doe@gmail.com"});
});

router.get("/:id", (req ,res) => {
    return res.status(200).json({username: "John", email: "john.doe@gmail.com", id: req.params.id});
});

module.exports = router;
