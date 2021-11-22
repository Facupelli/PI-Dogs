var express = require("express");
var router = express.Router();
const { Temperament } = require("../db");
const { getApiInfo } = require("../infoapi/infoapi");

router.get("/", async (req, res) => {
  try {
    const api = await getApiInfo();
    const temperament = api
      .map((el) => el.temperament)
      .filter((el) => el)
      .map((el) => el.split(","))
      .map((el) => {
        for (let i = 0; i < el.length; i++) return el[i];
      });
      console.log(temperament);
    temperament.forEach((el) => {
      Temperament.findOrCreate({
        where: { name: el },
      });
    });
    const allTemperaments = await Temperament.findAll({
      order: [["name", "ASC"]],
    });
    res.send(allTemperaments);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
