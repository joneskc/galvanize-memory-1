const database = require("./database-connection");

module.exports = {
    list(){
        return database('resolution')
    },
    read(id){
        return database('resolution').where('id', id).first()
    },
    create(resolution){
        return database('resolution').insert(resolution, '*')
    },
    update(id, resolution){
        return database('resolution').where('id', id).update(resolution, '*')
    },
    delete(id){
        return database('resolution').where('id', id).del()
    }
};
