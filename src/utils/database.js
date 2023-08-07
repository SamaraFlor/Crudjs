const mongoose = require('mongoose');

const URI =' mongodb+srv://admin:wf0h7xALcw7MJGai@cluster0.verbnx4.mongodb.net/?retryWrites=true&w=majority';
const databaseConnection= async () => {
    if (!global.mongoose) {
        mongoose.set('strictQuery', false)
        global.mongoose = await mongoose.connect(URI)
    };
};

module.exports = databaseConnection;