const logginUser = JSON.parse(localStorage.getItem('LoginUser'))

const userName = document.querySelector('.userName')
const proPic = document.getElementById('imag')
const lastName = document.getElementById('lastName')
const Gender = document.getElementById('Gender')
const Email = document.getElementById('Email')
const Phone = document.getElementById('phone')
const City = document.getElementById('City')

if(logginUser.profilePicture){
    proPic.src = logginUser.profilePicture
}
else{
    proPic.src = '../Assets/Images/person_image.png'
}
userName.textContent = logginUser.firstname
lastName.textContent = logginUser.lastname
Gender.textContent = logginUser.gender
Email.textContent = logginUser.email
Phone.textContent = logginUser.phone
City.textContent = logginUser.city

console.log(logginUser)