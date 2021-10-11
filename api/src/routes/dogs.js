var express = require("express");
var router = express.Router();
const { getAllDogs } = require("../infoapi/infoapi");
const { Dog, Temperament } = require("../db");

router.get("/", async (req, res) => {
  try {
    const name = req.query.name;
    let totalDogs = await getAllDogs();
    if (name) {
      let dogName = await totalDogs.filter((dog) =>
        dog.name.toLowerCase().includes(name.toLowerCase())
      );

      dogName.length
        ? res.status(200).send(dogName)
        : res.status(404).send("No se encontró la raza");
    } else {
      res.status(200).send(totalDogs);
    }
  } catch (e) {
    return res.send(e);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const totalDogs = await getAllDogs();
    const regExp = /[a-zA-Z]/g;
    let dogId;
    if (regExp.test(id)) {
      dogId = await totalDogs.filter((dog) => dog.id === id);
    } else {
      dogId = await totalDogs.filter((dog) => dog.id === Number(id));
    }
    dogId.length
      ? res.status(200).send(dogId)
      : res.status(404).send("Breed not found");
  } catch (e) {
    return res.send(e);
  }
});

router.post("/", async (req, res) => {
  const { name, height, weight, life_span, createdInDb, temperament } =
    req.body;

  try {
    let dogCreated = await Dog.create({
      name,
      life_span,
      weight,
      height,
      createdInDb,
    });

    let temperamentDb = await Temperament.findAll({
      where: { name: temperament },
    });
    await dogCreated.addTemperament(temperamentDb);
    res.send("Breed created correctly");
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
