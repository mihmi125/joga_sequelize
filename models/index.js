"use strict";

const fs = require("fs").promises;
const path = require("path");
const Sequelize = require("sequelize");

const sequelize = require("../config/database");

const loadModels = async () => {
  const db = {};

  // 1. Loeme asünkroonselt models kataloogi failid
  const files = await fs.readdir(__dirname);

  // 2. Filtreerime välja mudelifailid
  const modelFiles = files.filter(file =>
    !file.startsWith(".") &&
    file !== "index.js" &&
    file.endsWith(".js") &&
    !file.endsWith(".test.js")
  );

  // 3. Laeme ja initsialiseerime mudeliklassid
  for (const file of modelFiles) {
    const model = require(
      path.join(__dirname, file)
    )(sequelize, Sequelize.DataTypes);

    db[model.name] = model;
  }

  // 4. Loome mudelitevahelised assotsiatsioonid
  for (const modelName of Object.keys(db)) {
    if (typeof db[modelName].associate === "function") {
      db[modelName].associate(db);
    }
  }

  // 5. Lisame Sequelize instantsi db objektile
  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  return db;
};

module.exports = loadModels;