"use strict";

const Token = require('../../models/Token');

const requireAuth = (req, res, next) => {
  const token = req.query.accessToken || req.body.accessToken;
  Token.decode(token)
    .then(decoded => {
      req.decoded = decoded;
      next();
    })
    .catch(err => {
      err.statusCode = 403;
      next(err);
    });
}

module.exports = {
  requireAuth,
}
