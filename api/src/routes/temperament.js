var express = require("express");
var router = express.Router();
const { Temperament } = require("../db");
const {getApiInfo} = require('../infoapi/infoapi');

router.get("/", async (req, res) => {
    const api = await getApiInfo();
    const temperament = api.map((el) => el.temperament);
    const filterTemp = temperament.filter((el) => el).map((el) => el.split(","));
    const tempEach = filterTemp.map((el) => {
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