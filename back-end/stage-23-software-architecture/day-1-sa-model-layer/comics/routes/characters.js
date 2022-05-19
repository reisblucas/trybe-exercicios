const express = require('express');
const router = express.Router();
const charactersModel = require('../model/characters');

router.get('/', async (req, res) => {
  // pool exec returns [rows, fields] = await ... function();
  const [rows] = await charactersModel.getAll();
  res.status(200).json(rows);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const [rows] = await charactersModel.getById(id);
  res.status(200).json(rows);
});

router.post('/', async (req, res) => {
  try {
    const { name, cartoon, year } = req.body;
    const result = await charactersModel.add(name, cartoon, year);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;