const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios");
const { Dog, Temperament } = require("../db");
const { API_KEY } = process.env;
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo = async () => {
  const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
  const apiInfo = await apiUrl.data.map((el) => {
    return {
      name: el.name,
      image: el.image.url,
      temperament: el.temperament,
      life_span: el.life_span,
      weight: el.weight.metric,
      height: el.height.metric,
      id: el.id,
    };
  });
  return apiInfo;
};

const getDbInfo = async () => {
  return await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllDogs = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const totalInfo = apiInfo.concat(dbInfo);

  return totalInfo;
};

router.get("/dogs", async (req, res) => {
  const name = req.query.name;
  let totalDogs = await getAllDogs();
  console.log(totalDogs);
  if (name) {
    let dogName = await totalDogs.filter((dog) => dog.name.toLowerCase().includes(name.toLowerCase()));
    dogName.length ? res.status(200).send(dogName) : res.status(404).send("No se encontró la raza");
  } else {
    res.status(200).send(totalDogs);
  }
});

router.get("/dogs/:id", async (req, res) => {
  const { id } = req.params;
  const totalDogs = await getAllDogs();
  console.log(id);
  if(id){
    let dogId = await totalDogs.filter(dog => dog.id === Number(id));
    dogId.length ? res.status(200).send(dogId) : res.status(404).send('No se encontró la raza');
  }
});

router.get("/temperament", async (req, res) => {
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

// router.post("/dog", (req, res) => {
//   const { name, height, weight, life_span, createdInDb, temperament } = req.body;

//   let dogCreated = await Dog.create({
//     name,
//     height,
//     weight,
//     life_span,
//     createdInDb,
//   });

//   let temperamentDb = await Temperament.findAll({
//       where: {name: temperament}
//   });
//   dogCreated.addTemperament(temperamentDb);
//   res.send('Raza creada correctamente')
// });

module.exports = router;
