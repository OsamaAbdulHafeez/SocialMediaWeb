const email = document.getElementById('email')
const password = document.getElementById('password')
const logginUser = JSON.parse(localStorage.getItem('LoginUser'))
if(logginUser) window.location.href = "../homepage/index.html"
const loginHandler = () =>{
    const users = JSON.parse(localStorage.getItem('users'))
    // console.log(users)
    const foundUser = users.find(user=>{
        if(user.email === email.value)return user
        
    })
    if(foundUser.password != password.value)return alert("Invalid Password")
    console.log(foundUser)
    localStorage.setItem('LoginUser',JSON.stringify(foundUser))
    setTimeout(()=>{
        window.location.href = '../homepage/index.html'
    },1000)
}
