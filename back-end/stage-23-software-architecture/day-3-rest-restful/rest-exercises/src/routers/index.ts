import express from 'express';
import productController from '../controllers/productController'

const route = express.Router();

// product controller verbs
route.use('/products', productController);

// ...

export default route;
