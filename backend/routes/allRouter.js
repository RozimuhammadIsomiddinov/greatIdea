const { Router } = require("express");
const router = Router();
const {
  getAllTravels,
  getTravelById,
  addTravel,
  updateTravel,
  removeTravel,
} = require("../controller/travelController");

router.get("/", getAllTravels);
router.post("/add", addTravel);
router.get("/:id", getTravelById);
router.put("/:id", updateTravel);
router.delete("/:id", removeTravel);

module.exports = router;
