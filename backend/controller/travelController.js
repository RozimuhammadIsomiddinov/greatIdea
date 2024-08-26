const Travel = require("../models/model");

// GET
// Description: Get all travel books
const getAllTravels = async (req, res) => {
  try {
    const travels = await Travel.find();
    res.status(200).json({
      message: "success",
      travels: travels.reverse(),
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

// GET
// Description: Get one travel book by id
const getTravelById = async (req, res) => {
  const { id } = req.params;

  try {
    const travel = await Travel.findById(id);

    if (!travel) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    return res.status(200).json({
      message: "success",
      travel,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

// POST
// Description: Add new travel book
const addTravel = async (req, res) => {
  try {
    const { title, image, description } = req.body;

    const newTravel = await Travel.create({
      title,
      image,
      description,
    });

    res.status(201).json({
      message: "success",
      newTravel,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

// PUT
// Description: Edit travel book by its ID
const updateTravel = async (req, res) => {
  try {
    const { title, image, description } = req.body;
    const { id } = req.params;

    const updatedTravel = await Travel.findByIdAndUpdate(
      id,
      {
        title,
        image,
        description,
      },
      { new: true }
    ); // { new: true } to return the updated document

    if (!updatedTravel) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    res.status(200).json({
      message: "success",
      updatedTravel,
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

// DELETE
// Description: Remove travel book by ID
const removeTravel = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Travel.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    res.status(200).json({
      message: "Deleted",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllTravels,
  getTravelById,
  addTravel,
  updateTravel,
  removeTravel,
};
