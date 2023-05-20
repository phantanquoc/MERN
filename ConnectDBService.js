const mongoose = require('mongoose');
async function connectDatabase(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/mern_auth');
            console.log('success');
    } catch(error){
            console.log('fail',error)
    }
}
module.exports = connectDatabase;