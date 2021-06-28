const Sequelize = require('sequelize');

const sequelize = new Sequelize('sys', 'admin', 'secret!!', {
    dialect: 'mysql',
    host: 'admin.ccuoksfo6w6e.ap-northeast-2.rds.amazonaws.com'
});

const Op = Sequelize.Op;
class DIARY extends Sequelize.Model { }
DIARY.init(
    {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false
        },
        date: {
            type: Sequelize.STRING,
            allowNull: true
        }
    }
    , {
        sequelize,
        charset: 'utf8',
        collate: 'utf8_general_ci'
    }
);

async function addDiary(input) {
    try {
        const ret = await DIARY.create({
            title: input.title,
            content: input.content,
            date: input.date
        }, { logging: false });
        console.log('addDiary() 성공');
        return ret;
    }
    catch (error) {
        console.log('addDiary() 에러 : ', error);
    }
}

function showDiaryList() {
    const ret = DIARY.findAll({})
        .then(results => {
            console.log('showDiaryList() 성공');
            return results;
        })
        .catch(error => {
            console.error('showDiaryList() 에러 ', error);
        });
    return ret;
}

async function detailDiary(input) {
    try {
        let ret = await DIARY.findAll({ where: { id: input } });
        console.log('detailDiary() 성공', { data: ret });
        return ret;
    }
    catch (error) {
        console.error('detailDiary() 에러 / ', error);
    }
    return;
}

async function updateDiary(id, input) {
    try {
        const ret = await DIARY.update(
            {
                title: input.title,
                content: input.content,
                date: input.date
            }, { where: { id: id } }
        );
        console.log('id : ', id);
        console.log('input : ', input);
        console.log('updateDiary() 성공', { data: ret });
    }
    catch (error) {
        console.error('updateDiary() 에러 :  ', error);
    }
}

async function deleteDiary(input) {
    try {
        await DIARY.destroy(
            { where: { id: input } }
        );
        console.log('deleteDiary() 성공 ');
    }
    catch (error) {
        console.error('deleteDiary() : ', error);
    }
}

const initModel = async () => {
    try {
        await DIARY.sync({ force: true });

        sequelize.close();
    }
    catch (error) {
        console.log('initModel() 에러 : ', error);
    }
}

exports.Model = {
    addDiary,
    showDiaryList,
    detailDiary,
    updateDiary,
    deleteDiary
}

 //initModel();