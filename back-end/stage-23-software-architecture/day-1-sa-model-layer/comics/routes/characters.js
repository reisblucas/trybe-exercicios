const express = require('express');
const router = express.Router();
const charactersModel = require('../model/characters');

router.get('/', async (req, res) => {
  // pool exec returns [rows, fields] = await ... function();
  const [rows] = await charactersModel.getAll();
  res.send(200).json(rows);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const [rows] = await charactersModel.getById(id);
  res.send(200).json(rows);
});