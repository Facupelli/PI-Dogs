var express = require("express");
var router = express.Router();
const { getAllDogs } = require('../infoapi/infoapi');
const { Dog, Temperament } = require('../db');

  
  router.get("/", async (req, res) => {
    const name = req.query.name;
    let totalDogs = await getAllDogs();
    if (name) {
      let dogName = await totalDogs.filter((dog) => dog.name.toLowerCase().includes(name.toLowerCase()));
      dogName.length ? res.status(200).send(dogName) : res.status(404).send("No se encontró la raza");
    } else {
      res.status(200).send(totalDogs);
    }
  });
  
  router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const totalDogs = await getAllDogs();
    console.log(id);
    if(id){
      let dogId = await totalDogs.filter(dog => dog.id === Number(id));
      dogId.length ? res.status(200).send(dogId) : res.status(404).send('No se encontró la raza');
    }
  });


router.post("/", async (req, res) => {
  const { name, min_height, max_height, min_weight, max_weight, life_span, createdInDb, temperament } = req.body;

  try{
    let dogCreated = await Dog.create({
      name,
      life_span,
      min_weight,
      max_weight,
      min_height,
      max_height,
      createdInDb,
    });
  
    let temperamentDb = await Temperament.findAll({ where: {name: temperament} });   
    await dogCreated.addTemperaments(temperamentDb);
    res.send('Breed created correctly')
  }catch(error){
    res.send(error)
  }
  
});

module.exports = router;