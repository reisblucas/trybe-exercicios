import express from 'express';
import ProductModel from '../models/productModel';

const router = express.Router();

router.get('/list-products', async (req, res) => {
  const products = await ProductModel.getAll();

  res.send(200).json(products);
});

router.get('/get-by-id/:id', async (req, res) => {
  const product = await ProductModel.getById(parseInt(req.params.id));

  res.status(200).json(product);
});

router.post('/add-product', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.status(200).json(newProduct);
});

router.post('/delete-product/:id', async (req, res) => {
  const products = await ProductModel.exclude(parseInt(req.params.id));

  res.status(200).json(products);
});

router.post('/update-product/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(parseInt(req.params.id), name, brand);

  res.status(200).json(products);
});

export default router;
