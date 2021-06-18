const express = require('express');
const {Model} = require('./Model');
var bodyParser = require(`body-parser`);

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(3000);

app.get('/todoList', getAll);                // todo 리스트 보기
app.post('/todoList', postTodo);             // todo 추가하기  
app.put('/todoList', putTodo);               // todo 체크하기 (isChecked : false -> true)
app.get('/todoList/:key', getByChecked);     // 완료한 일 보기               

async function getAll(req, res){
    try{
        const ret = await Model.showTodoList();
        res.send({msg: 'getAll success', data: ret});
    }
    catch (error) {
        console.log('getAll error /', error);
    }
}

async function getByChecked(req, res){
    try{
        console.log('params : ', req.params.key);
        var searchKey = false
        if (req.params.key === '1') {   // where isClear = true
            searchKey = true
        } 
        const ret = await Model.showTodoIsChecked(searchKey);
        res.send({msg: 'getByChecked success', data: ret});
    }
    catch (error) {
        console.log('getByChecked error /', error);
    }
}

async function postTodo(req, res) {
    try{
        console.log('body.content : ', req.body.todo);
        const inputContent = req.body.todo;
        await Model.addTodo(inputContent);
        res.send({msg: 'postTodosuccess'});
    }
    catch (error) {
        console.log('postTodo error / ',error);
    }
}

async function putTodo(req, res) {
    try{
        console.log('body.todo_id : ', req.body.id);
        const id = req.body.id;
        await Model.changeIsFinished(id);
        res.send({msg: 'putTodo success'});
    }
    catch(error) {
        console.log('putTodo error / ',error);
    }
}