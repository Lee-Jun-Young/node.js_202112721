const express = require('express');
const { Model } = require('../models/model');
const Router = express.Router();

// 리스트 불러오기
Router.get('/', async (req, res) => {
    try {
        const ret = await Model.showDiaryList();
        res.render('main', { data: ret });
    }
    catch (error) {
        console.log('불러오기 에러 :', error);
    }
})

// insert 페이지로 넘어가기
Router.get('/insert', async (req, res) => {
    res.render('insert');
});

// 일정 추가 동작
Router.post('/insert', async (req, res) => {
    try {
        const inputData = req.body;
        const ret = await Model.addDiary(inputData);
        res.redirect('/')
    }
    catch (error) {
        console.log('추가 에러 : ', error);
    }
})

// 삭제
Router.get('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const ret = await Model.deleteDiary(id);
        res.redirect('/');
    }
    catch (error) {
        console.log('삭제 에러 : ', error);
    }
    return;
})

// edit 페이지로 이동
Router.get('/edit/:id', async (req, res) => {
    try {
        var id = req.params.id;
        const ret = await Model.detailDiary(id);
        res.render('detail', { data: ret });
    }
    catch (error) {
        console.log('상세보기 에러 :', error);
    }
})

// update
Router.post('/edit/:id', async (req, res) => {
    try {
        var id = req.params.id;
        const inputData = req.body;
        const ret = await Model.updateDiary(id, inputData);
        res.redirect('/');
    }
    catch (error) {
        console.log('추가 에러 : ', error);
    }
})

module.exports = Router;