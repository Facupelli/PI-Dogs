const axios = require("axios");
const { Dog, Temperament } = require("../db");
const { API_KEY } = process.env;

const getApiInfo = async () => {
  try {
    const api = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );
    const apiInfo = await api.data.map((el) => {
      return {
        name: el.name,
        image: el.image.url,
        temperament: el.temperament,
        life_span: el.life_span,
        min_weight: Number(el.weight.metric.split(" - ")[0]),
        max_weight: Number(el.weight.metric.split(" - ")[1]),
        min_height: Number(el.height.metric.split(" - ")[0]),
        max_height: Number(el.height.metric.split(" - ")[1]),
        id: el.id,
      };
    });
    return apiInfo;
  } catch (e) {
    console.log(e);
  }
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

module.exports = {
  getApiInfo,
  getDbInfo,
  getAllDogs,
};
