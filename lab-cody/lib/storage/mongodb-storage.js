'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const WuTang = require('../../models/wu');


function save(wuTang) {
    let wuMember = new WuTang({
        name: wuMember.name,
        lyric: wuMember.lyric,
        chambers: wuMember.chambers,
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

module.exports = {save, get, getAll, remove, removeAll};