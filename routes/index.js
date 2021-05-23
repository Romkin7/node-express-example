const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello world" });
});

router.get("/events", (req, res) => {
    return res.status(200).json({events: [
        {
            name: "event1",
            id: 1,
            description: "first event"
        },
        {
            name: "event2",
            id: 2,
            description: "second event"
        },
        {
            name: "event3",
            id: 3,
            description: "third event"
        },
    ]})
})

module.exports = router;
