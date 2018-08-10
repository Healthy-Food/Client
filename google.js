function googleLogin(){
    axios.get('http://localhost:3000/auth/google')
    .then(data=>{
        console.log(data)
    })
}

router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));