// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Category have many Products
// if a Category is deleted then the Product associated
// should be deleted
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});


// https://sequelize.org/docs/v6/core-concepts/assocs/

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { through: ProductTag });
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { through: ProductTag });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
