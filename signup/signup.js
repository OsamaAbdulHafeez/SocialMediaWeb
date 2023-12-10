const submit = document.querySelector('button')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
// const phone = document.getElementById('phone')
// const gender = document.getElementById('gender')
// const city = document.getElementById('city')
const password = document.getElementById('password')
const confirmpass = document.getElementById('confirmpass')
const passText = document.getElementById('passText')
const confrmPass = document.getElementById('confrmPass')
// const profilePic = document.getElementById('profilePic')
// const profession = document.getElementById('profession')


const logginUser = JSON.parse(localStorage.getItem('LoginUser'))
const showImage = document.getElementById('showImage')
if (logginUser) window.location.href = "../homepage/index.html"
const signupHandler = () => {
    const users = JSON.parse(localStorage.getItem('users')) || []
    if (!firstName.value || !lastName.value || !email.value || !password.value || !confirmpass.value) return alert("please Fill all the values")

    if (password.value.length < 8) {
        return passText.style.display = "block"
    }
    if (password.value != confirmpass.value) return confrmPass.style.display = "block"
    const userNameFound = users.find((user) => {
        console.log(user)
        if (user.firstname === firstName.value) return user
    })
    if (userNameFound) return alert("UserName Already Exist")


    const useremailFound = users.find((user) => {
        if (user.email === email.value) return user
    })
    if (useremailFound) return alert("UserName Already Exist")
    // const file = profilePic.files[0]
    // const reader = new FileReader();
    // reader.onload = function (event) {
    //     const imageURL = event.target.result

    //     const user = {
    //         firstname: firstName.value,
    //         lastname: lastName.value,
    //         email: email.value,
    //         phone:phone.value,
    //         gender:gender.value,
    //         city:city.value,
    //         password: password.value,
    //         confirmPassword: confirmpass.value,
    //         profession:profession.value,
    //         profilePicture: imageURL
    //     }
    //     console.log(user)
    //     users.push(user)
    //     localStorage.setItem('users', JSON.stringify(users))
    //     alert("Signup Successfully")
    // }
    // reader.readAsDataURL(file)

    const user = {
        firstname: firstName.value,
        lastname: lastName.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmpass.value,
        // profession: profession.value,
        // profilePicture: imageURL
    }
    users.push(user)
    passText.style.display = "none"
    confrmPass.style.display = "none"
    localStorage.setItem('users', JSON.stringify(users))
        alert("Signup Successfully")

    setTimeout(() => {
        window.location.href = '../login/index.html'
    }, 1500)
    // firstName.value = ""
    // lastName.value = ""
    // email.value = ""
    // password.value = ""
    // confirmpass.value = ""
}

