function handleRegister(){
    alert('click event handle');
    // 1. lay value tren form 
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('email').value;

    console.log('username',username);
    console.log('email',email);
    console.log('password',password);


    // 2. gui value tu clinet den server

//     axios.post('http://127.0.0.1:5000/api/auth/register', {
//         username: username,
//         email: email,
//         password: password
 
//     })
//     .then(function(response){
//         console.log(response);
//     })
//     .catch(function(error){
//         console.log(error);
//     })
}
