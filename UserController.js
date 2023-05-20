function getListUser(req,res){
    res.send('list user name');
}

function userDetail(req,res){
    res.send('user detail');
}

module.exports = {
    getListUser: getListUser,
    userDetail: userDetail
}
