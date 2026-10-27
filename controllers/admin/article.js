const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize');
const models = require('../../models');

// create new article into data table
const createArticle = (req, res) => {
  // get form data
  let name = req.body.name;
  let slug = req.body.slug;
  let image = req.body.image;
  let body = req.body.body;

  // create new article by Article model
  const newArticle = models.Article.create({
    name: name,
    slug: slug,
    image: image,
    body: body,
    published: new Date().toISOString().slice(0, 19).replace('T', ' ')
  })
    .then(article => {
      console.log(article);
      return res.status(200).json({ message: 'New article is added' });
    })
    .catch(error => {
      return res.status(500).send(error.message);
    });
};

const updateArticle = (req, res) => {
  if (req.method === 'GET') {
    models.Article.findByPk(req.params.id)
      .then(article => {
        return res.status(200).json({ article });
      })
      .catch(error => res.status(500).send(error.message));
  } else if (req.method === 'POST') {
    models.Article.update({
      name: req.body.name,
      slug: req.body.slug,
      image: req.body.image,
      body: req.body.body,
      author_id: req.body.author
    }, {
      where: { id: req.params.id }
    })
      .then(() => {
        return res.status(200).json({ message: 'Article updated successfully' });
      })
      .catch(error => res.status(500).send(error.message));
  }
};

const deleteArticle = (req, res) => {
  models.Article.destroy({
    where: { id: req.params.id }
  })
    .then(() => {
      return res.status(200).json({ message: 'Article deleted successfully' });
    })
    .catch(error => res.status(500).send(error.message));
};

module.exports = {
  createArticle,
  updateArticle,
  deleteArticle
};