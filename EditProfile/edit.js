const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmpass = document.getElementById('confirmpass')
const phone = document.getElementById('phone')
const gender = document.getElementById('gender')
const city = document.getElementById('city')

const loginUser = JSON.parse(localStorage.getItem('LoginUser'))

firstName.value = loginUser.firstname;
lastName.value = loginUser.lastname;
email.value = loginUser.email;
password.value = loginUser.password;
confirmpass.value = loginUser.confirmPassword
phone.value = loginUser.phone
city.value = loginUser.city
gender.value = loginUser.gender
const users = JSON.parse(localStorage.getItem('users')) || []

// console.log(foundUser)
const updateHandler = () => {

    let foundUser = users.find(user => {
        if (loginUser.email === user.email) {
            user.firstname = firstName.value
            user.lastname = lastName.value
            user.email = email.value
            user.password = password.value
            user.phone = phone.value
            user.city = city.value
            user.gender = gender.value
            user.confirmPassword = confirmpass.value
            return user
        }
    })
    // foundUser.firstname = firstName.value
    // foundUser.lastname = lastName.value
    // foundUser.email = email.value
    // foundUser.password = password.value
    // foundUser.confirmPassword = confirmpass.value
    // const user = {
    //     firstname: firstName.value,
    //     lastname: lastName.value,
    //     email: email.value,
    //     password: password.value,
    //     confirmPassword: confirmpass.value
    // }
    // foundUser = user
    console.log(foundUser)
    localStorage.setItem('users',JSON.stringify(users))
    localStorage.setItem('LoginUser',JSON.stringify(foundUser))
    setTimeout(() => {
        window.location.href = '../homepage/index.html'
    }, 2000)

}