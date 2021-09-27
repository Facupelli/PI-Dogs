var express = require("express");
var router = express.Router();
const { Temperament } = require("../db");
const {getApiInfo} = require('../infoapi/infoapi');

router.get("/", async (req, res) => {
    const temperamentApi = await getApiInfo();
    const temperament = temperamentApi.map((el) => el.temperament);
    const temp = temperament.filter((el) => el).map((el) => el.split(","));
    const tempEach = temp.map((el) => {
      for (let i = 0; i < el.length; i++) return el[i];
    });
    tempEach.forEach((el) => {
      Temperament.findOrCreate({
        where: { name: el },
      });
    });
    const allTemperaments = await Temperament.findAll();
    res.send(allTemperaments);
  });

  module.exports = router;