const Product = require('../models/productModel');
const { getFirstMissingLetter } = require('../utils/letra-ausente');

// Validações
const validateProduct = (name, price, sku) => {
  const errors = [];
  
  if (!name || name.trim() === '') {
    errors.push('Nome é obrigatório');
  }
  
  if (!price || price <= 0) {
    errors.push('Preço deve ser maior que zero');
  }
  
  if (!sku || sku.trim() === '') {
    errors.push('SKU é obrigatório');
  }
  
  return errors;
};

const addMissingLetter = (product) => ({
  ...product,
  firstMissingLetter: getFirstMissingLetter(product.name)
});

exports.createProduct = (req, res) => {
  const { name, price, sku } = req.body;
  
  const errors = validateProduct(name, price, sku);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  Product.create({ name: name.trim(), price: parseFloat(price), sku: sku.trim() }, (err, product) => {
    if (err) {
      if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
        return res.status(400).json({ error: 'SKU já existe' });
      }
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
    res.status(201).json(addMissingLetter(product));
  });
};

exports.getAllProducts = (req, res) => {
  Product.findAll((err, products) => {
    if (err) return res.status(500).json({ error: 'Erro interno do servidor' });
    
    const productsWithMissingLetter = products.map(addMissingLetter);
    res.json(productsWithMissingLetter);
  });
};

exports.getProductById = (req, res) => {
  const { id } = req.params;
  
  Product.findById(id, (err, product) => {
    if (err) return res.status(500).json({ error: 'Erro interno do servidor' });
    if (!product) return res.status(404).json({ error: 'Produto não encontrado' });
    
    res.json(addMissingLetter(product));
  });
};

exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price, sku } = req.body;
  
  const errors = validateProduct(name, price, sku);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  Product.update(id, { name: name.trim(), price: parseFloat(price), sku: sku.trim() }, (err, product) => {
    if (err) {
      if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
        return res.status(400).json({ error: 'SKU já existe' });
      }
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
    res.json(addMissingLetter(product));
  });
};

exports.deleteProduct = (req, res) => {
  const { id } = req.params;
  
  Product.delete(id, (err) => {
    if (err) return res.status(500).json({ error: 'Erro interno do servidor' });
    res.status(204).send();
  });
};