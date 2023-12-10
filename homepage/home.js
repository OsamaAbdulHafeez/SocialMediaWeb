const userName = document.querySelectorAll('#userName')
// console.log(userName)

const imag = [...document.querySelectorAll('.imag')]
const profession = document.getElementById('profession')
// const proImg = document.querySelector('#proImg')
const logout = document.getElementById('logout')
const logginUser = JSON.parse(localStorage.getItem('LoginUser'))

if(!logginUser) window.location.href = "../signup/index.html"
if(logginUser.profilePicture){
  imag[0].src = logginUser.profilePicture
  imag[1].src = logginUser.profilePicture
  imag[2].src = logginUser.profilePicture
}
else{
  imag[0].src = '../Assets/Images/person_image.png'
  imag[1].src = '../Assets/Images/person_image.png'
  imag[2].src = '../Assets/Images/person_image.png'
}

userName[0].textContent = logginUser.firstname
userName[1].textContent = logginUser.firstname
// profession.textContent = logginUser.profession

if(logginUser.profession){
  profession.textContent  = logginUser
}



// Post Section

const PstJob = document.querySelector('#PstJob')
const main = document.querySelector('#main')
const Post = document.querySelector('.Post')
const CompanyName = document.querySelector('#CmpNme')
const CompanyLocation = document.querySelector('#CmpLocat')
const Designation = document.querySelector('#Designation')
const jobTiming = document.querySelector('#jobTiming')
const companyBudget = document.querySelector('#package')
const jobDescription = document.querySelector('#jobDesp')

const postes = document.querySelector('.postes')
PstJob.addEventListener('click',()=>{
    // Hidden/Block
    main.style.display = "none"
    Post.style.display = "block"
})

const postDisplayHandler = () =>{
    postes.innerHTML = ""
    const postLocalStorage = JSON.parse(localStorage.getItem('Posts')) || []
    postLocalStorage.reverse().forEach(element => {
        const text =  `<div class="showpost">
        <!-- Post User Image -->
        <div class="postUserInfo">
          <div class="userImg">
            <img src="${element.logginuserDetails.profilePicture}" alt="" width="40px" style="border-radius: 50%;">
            <h6>${element.logginuserDetails.firstname}</h6>
          </div>
          <div class="postSetting">
            <i class="bi bi-three-dots-vertical" style="color: #000;"></i>
          </div>
        </div>
        <!-- Job Location and Message-->
        <div class="locatAndMsg">
          <div class="locat">
            <!-- Company Name -->
            <div class="compName">
              <img src="../Assets/Images/companyLogo.png" alt="" width="20px">
              <p>${element.companyName}</p>
            </div>
            <!-- Company Location -->
            <div class="compLocat">
              <img src="../Assets/Images/LocationLogo.png" alt="" width="20px">
              <p>${element.companyLocation}</p>
            </div>
          </div>
          <div class="mesag">
            <i class="fa-regular fa-envelope"></i>
          </div>
        </div>
        <!-- JobDesigation -->
        <h2>${element.Designation}</h2>
        <!-- Job Time -->
        <div class="jobTime">
          <h4>${element.jobTiming}</h4>
          <h6>${element.companyBudget}Pkr/Month</h6>
        </div>
        <!-- Job Description -->
        <p id="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusantium magni dolores laudantium commodi blanditiis quia eaque quo, repudiandae, iste consectetur perferendis ipsum voluptas tempore.</p>

      </div>`

      postes.innerHTML+=text

        
    });

    // console.log(postes)
}
postDisplayHandler()
const postHandler = () =>{
    // Hidden/Block
    main.style.display = "block"
    Post.style.display = "none"
    const postLocalStorage = JSON.parse(localStorage.getItem('Posts')) || []
    const postUser = {
        companyName : CompanyName.value,
        companyLocation : CompanyLocation.value,
        Designation : Designation.value,
        jobTiming : jobTiming.value,
        companyBudget : companyBudget.value,
        jobDescription : jobDescription.value,
        logginuserDetails : logginUser
    }
    postLocalStorage.push(postUser)
    localStorage.setItem('Posts',JSON.stringify(postLocalStorage))
    postDisplayHandler()
}
// Logout Section
logout.addEventListener('click',()=>{
    localStorage.removeItem('LoginUser')
    window.location.href = '../login/index.html'
    console.log("Osama")
})