const Sequelize = require('sequelize');

const sequelize = new Sequelize('example', 'root', 'bk7154cg!!@@', {
    dialect: 'mysql',
    host: '127.0.0.1'
});

const Op = Sequelize.Op;
class TODO extends Sequelize.Model { }
TODO.init(
    {
        todo: {
            type: Sequelize.STRING,
            allowNull: true
        },
        isChecked: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    }
    , {
        sequelize,
        charset: 'utf8',
        collate: 'utf8_general_ci'
    }
);

const prepareModel = async () => {
    try {
        await TODO.sync({ force: true });

        sequelize.close();
    }
    catch (error) {
        console.log('prepareModel() Error', error);
    }
}


async function addTodo(input) {
    try {
        const ret = await TODO.create({
            todo: input
        }, {logging: false});
        const newData = ret.dataValues;
        console.log(newData);
        console.log('addTodo success');
        sequelize.close();
    }
    catch (error) {
        console.log('addTodo failed : ', error);
    }
}

function showTodoList() {
    const ret = TODO.findAll({})
        .then(results => {
            console.log('showTodoList success');
            return results;
        })
        .catch(error => {
            console.error('showTodoList Error / ', error);
        });
    return ret;
}

async function showTodoIsChecked(input) {
    console.log('showTodoIsChecked inputKey:', input);
    try {
        let ret = await TODO.findAll( { where: { isChecked: input } });
        console.log('showTodoIsChecked success');
        return ret;
    }
    catch (error) {
        console.error('showTodoIsChecked Error / ', error);
    }
}

async function changeIsChecked(id) {
    try {
        let ret = await TODO.update(
            { isChecked: true },
            { where: { id: id } }
        );
        console.log('isChecked change success');
    }
    catch (error) {
        console.error('isChecked change Error / ', error);
    }
}

exports.Model = {
    addTodo,
    showTodoList,
    showTodoIsChecked,
    changeIsChecked
}

 // prepareModel();