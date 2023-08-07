const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome:{type: String, required: true},
    email:{type: String, required: true, unique: true}
})

//
module.exports = mongoose.models.User || mongoose.model('User', UserSchema);


//models informando para o banco de dados quais as variaveis que o usuario terá