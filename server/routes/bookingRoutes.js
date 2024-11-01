const { Router } = require("express");
const { auth } = require("../middleware/authMiddleware");
const { getBookings, createBooking, updateBooking, deleteBooking, getBooking } = require("../controllers/bookingController");

router = Router();

router.get("/", auth, getBookings);
router.post("/", auth, createBooking);
router.get("/:id", getBooking);
router.put("/:id", auth, updateBooking);
router.delete("/:id", auth, deleteBooking);

module.exports = router;