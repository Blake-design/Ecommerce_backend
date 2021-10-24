// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foriegnKey: "catagory_id",
  onDelete: "CASCADE",
});
// Categories have many Products
Category.hasMany(Product, {
  foriegnKey: "category_id",
  onDelete: "CASCADE",
});
// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  foriegnKey: "tag_id",
  onDelete: "CASCADE",
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  foriegnKey: "tag_id",
  onDelete: "CASCADE",
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
