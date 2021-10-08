var express = require("express");
var router = express.Router();
const { Temperament } = require("../db");
const { getApiInfo } = require("../infoapi/infoapi");

router.get("/", async (req, res) => {
  const api = await getApiInfo();
  const temperament = api
    .map((el) => el.temperament)
    .filter((el) => el)
    .map((el) => el.split(","))
    .map((el) => {
      for (let i = 0; i < el.length; i++) return el[i];
    });
  temperament.forEach((el) => {
    Temperament.findOrCreate({
      where: { name: el },
    });
  });
  const allTemperaments = await Temperament.findAll({
    order:[
      ['name', 'ASC']
    ]
  });
  res.send(allTemperaments);
});

module.exports = router;
