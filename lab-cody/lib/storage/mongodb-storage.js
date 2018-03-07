'use strict';

const mongoose = require('mongoose');

const WuTang = require('../../models/wu');

mongoose.connect('mongodb://localhost/test')
.then(() => {
    console.info('yep its up and running');
}).catch (
    (error => {
        console.error(`error on connection ${error}`);
    })
)



function save(wuTang) {
    let wuMember = new WuTang({
        name: wuTang.name,
        lyric: wuTang.lyric,
        chambers: wuTang.chambers,
    })
    return new Promise((resolve, reject)=> {
        wuMember.save((err, savedWu)=> {
            resolve(savedWu);
        })
    });
}

function get(id) {
    return new Promise((resolve, reject)=> {
        WuTang.findOne({_id: id}, (err, wuMember)=> {
            resolve(wuMember);
        })
    });
}

function getAll() {
    return new Promise((resolve, reject)=> {
        WuTang.find((err, wuMember) =>{
            resolve(wuMember);
        })
    });
}

function update(id, WuTang) {
    return new Promise((resolve, reject) => {
      WuTang.findOneAndUpdate(id, wuMember, (err, wuMember) => {
        resolve(wuMember);
      });
    });
  }

function remove(id) {
    return new Promise((resolve, reject)=> {
        WuTang.remove({_id: id}, (err, wuMember)=> {
            resolve(wuMember)
        })
    });
}

function removeAll() {
    return new Promise((resolve, reject)=> {
        WuTang.remove((err, wuMember) => {
            resolve(wuMember);
        })
    });
}

module.exports = {save, get, getAll, remove, removeAll,update};