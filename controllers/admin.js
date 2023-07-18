const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save().then(() => {
    res.redirect('/');
  }).catch(err => console.log(err));
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if(!editMode){
     return res.redirect('/');
  }
  const prodId = req.params.productId;
  Product.findById(prodId).then(([product]) => {
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product[0]
    });
  }).catch(err => {
    console.log(err);
     res.redirect('/');
  });
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDescription = req.body.description;
  const updatedProduct = new Product(updatedTitle, updatedImageUrl, updatedDescription, updatedPrice);
  updatedProduct.updateProductById(prodId).then(() => {
    res.redirect('/admin/products');
  }).catch(err => console.log(err));
}

exports.deleteProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.deleteProductById(prodId).then(() => {
    res.redirect('/admin/products');
  })
  .catch(err => console.log(err));
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll().then(([rows, fieldData]) => {
    res.render('admin/products', {
      prods: rows,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  }).catch(err => console.log(err));
};
