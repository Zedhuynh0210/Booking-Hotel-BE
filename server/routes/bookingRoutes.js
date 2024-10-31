const { Router } = require("express");
const { getBookings, createBooking, updateBooking, deleteBooking, getBooking } = require("../controllers/bookingController");

router = Router();

router.get("/", getBookings);
router.post("/", createBooking);
router.get("/:id", getBooking);
router.put("/:id", updateBooking);
router.delete("/:id",deleteBooking);

module.exports = router;