// const express = require('express');
// const router = express.Router();
// const WuTang = require('../models/wu');

// router.get('/', (req, res) => {

//     if (req.query.id) {
//          WuTang.findOne({_id: req.query.id})
//          .then((results) => {
//              console.log("FOUND:", results);
//              res.send(results);
//          })

//     }else{
//         WuTang.find()
//     .then((results) => {
//       console.log("FOUND:", results);
//       console.log("FOUND TOTAL:", results.length);
//       res.send(results); 
//     })
//     };
// });

// module.exports = router;