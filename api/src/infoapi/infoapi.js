const axios = require("axios");
const { Dog, Temperament } = require("../db");
const { API_KEY } = process.env;

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

  module.exports = {
      getApiInfo,
      getDbInfo,
      getAllDogs
  }