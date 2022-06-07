const express = require('express');

const booksService = require('../services/book.service');

const booksRouter = express.Router();

booksRouter.route('/')
  .get(async (req, res) => {
    const result = await booksService.getAll();

    return res.status(200).json(result);
  });

module.exports = booksRouter;