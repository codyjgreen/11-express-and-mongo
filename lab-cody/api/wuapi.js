'use strict';

const express = require('express');
const router = express.Router();

const storage = require('../lib/storage/storage').mongodb;

const WuTang = require('../models/wu')

router.get('/', (req, res)=> {
    if (req.query.id) {
        let id = req.query.id;
        storage.get(id)
        .then(wuTang => {
            res.send(wuTang);
        });

    }else{
        storage.getAll()
        .then(wuTang => {
            
            res.send(wuTang)
            
        });
    }
});




router.post('/', (req, res) => {
    
    let wuTang = {
      name: req.body.name,
      lyric: req.body.lyric,
      chambers: req.body.chambers,
    };
  
   
    storage.save(wuTang)
    .then(wuTang => {
      res.status(200);
      res.send(wuTang);
    });
  });

  router.put('/', (req, res) => {
    let id = req.query.id;
    let wuMember = req.body;
    console.log(wuMember, 'what is wumember at this time?')
    // console.log(WuTang, 'what is wumember at this time?')

    WuTang.update(id, wuMember)
    .then(wuMember => {
        
        console.log(wuMember, 'what is wumember at this now?')
        res.send(wuMember);
    });
  });


//   router.put('/', (req, res) => {
//     let id = req.query.id;
//     storage.get(id)
//     .then(WuTang => {
//       if (req.body.name) {
//         WuTang.name = req.body.name;
//       }
//       if (req.body.lyric) {
//         WuTang.lyric = req.body.lyric;
//       }
//       if (req.body.chambers) {
//         WuTang.chambers = req.body.chambers;
//       }
     
  
//       WuTang.save((err, WuTang) => {
//         res.send(wuMember);
//       })
//     });
//   });









module.exports = router;