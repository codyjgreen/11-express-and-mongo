'use strict';

const express = require('express');
const router = express.Router();

const storage = require('../lib/storage/storage').mongodb;

router.get('/', (req, res)=> {
    if (req.query.id) {
        let id = req.query.id;
        storage.get(id)
        .then(wuMember => {
            res.send(wuMember);
        });

    }else{
        storage.getAll()
        .then(wuMember => {
            res.send(wuMember);
        });
    }
});

router.post('/', (req, res) => {
    // pick the book attributes off the request.
    let wuMember = {
      name: req.body.name,
      lyric: req.body.lyric,
      chambers: req.body.chambers,
    };
  
    // save the book to the database
    storage.save(wuMember)
    .then(wuMember => {
      res.status(200);
      res.send(wuMember);
    });
  })





module.exports = router;