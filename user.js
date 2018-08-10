function register(){
   
    let username = $("#username").val()
    let email = $("#email").val()
    let password = $("#pwd").val()
    axios.post('http://localhost:3000/signup',{
        username,
        email,
        password
    })
    .then(data=>{
        localStorage.setItem('token',data.data.token)
        localStorage.setItem('username',data.data.data.username)
        // console.log(data.data)
    })
    .catch(err=>{
        console.log(err)
    })
}

function login(){
   
    let email = $('#email').val()
    let password = $('#pwd').val()
    axios.post('http://localhost:3000/signin',{
        email,
        password
    })
    .then(data=>{
        localStorage.setItem('token',data.data.token)
        localStorage.setItem('username',data.data.user.username)
        // console.log(data)
    })
    .catch(err=>{
        console.log(err)
    })
}