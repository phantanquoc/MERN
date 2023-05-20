const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/project',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

const Schema = mongoose.Schema;

const account = new Schema({
  username: String,
  password: String,
},{
    collection: 'Account'
});

const AccountModel = mongoose.model('account',account);

AccountModel.find({
    username: 'Phan Tan Quoc'
})
.then(function(data){
    console.log('data',data);
})
.catch(function(err){
    console.log('loi',err);
})

// AccountModel.create({
//     username: 'phan tan quoc ',
//     password: 121212,
// })

// AccountModel.updateMany({
//     username: 'phan tan quoc',
//     password: '121212'
// },{
//     password:222222
// })
// .then(function(data){
//     console.log('data',data);
// })
// .catch(function(err){
//     console.log('loi',err);
// })

// AccountModel.deleteMany({
//     username: 'Phan Tan Quoc',
// })
// .then(function(data){
//     console.log('data',data);
// })
// .catch(function(err){
//     console.log('loi',err);
// })
