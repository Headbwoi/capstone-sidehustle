
const form = document.querySelector('form'),
//getting all elements from html document
  uField = form.querySelector('.user'),
  uInput = uField.querySelector('input'),
  uError = uField.querySelector('.errortxt'),
  eField = form.querySelector('.email'),
  eInput = eField.querySelector('input'),
  eError = eField.querySelector('.errortxt'),
  pField = form.querySelector('.pass'),
  pInput = pField.querySelector('input'),
  pError = pField.querySelector('.errortxt'),
  cField = form.querySelector('.pass2'),
  cInput = cField.querySelector('input')
  cError = cField.querySelector('.errortxt'),
  gField = form.querySelector(".gender"),
  gMale = gField.querySelector(".male-check"),
  gMaleInput = gMale.querySelector("#malebtn"),
  gMaleInputCheck = gMale.querySelector(".check"),
  gFemale = gField.querySelector(".female-check"),
  gFemaleInput = gFemale.querySelector("#femalebtn"),
  gFemaleInputCheck = gFemale.querySelector(".check"),
  gError = gField.querySelector(".errortxt")

  
const toggle = document.querySelector('#toggle')
const mobMenu = document.querySelector('#mob-menu')

/*toggle */
toggle.addEventListener('click', () => {
  toggle.classList.toggle('open')
  mobMenu.classList.toggle('show')
})




//event listener on form
form.addEventListener('submit', e => {
  
  e.preventDefault()//prevents form submission
  
  checkUser()//calls this function
  checkEmail()//calls this function
  checkPass()// calls this function
  checkPass2()//calls this function
  checkGender()
  
  // onkey up calls this functions l.e validates user inputs on key up
  uInput.onkeyup = ()=>{checkUser();}
  eInput.onkeyup = ()=>{checkEmail();}
  pInput.onkeyup = ()=>{checkPass();}
  cInput.onkeyup = ()=>{checkPass2();}
  gMale.onclick = () => {checkGender()}
  gFemale.onclick = () => {checkGender()}
  
  
  
  //checkuser function
  function checkUser(){
    
    if(uInput.value === ""){
      uInput.classList.add('error')
      uInput.classList.remove('success')
      uError.innerText = "Username can't be empty"
    }else if(uInput.value.length < 5){
      uInput.classList.add('error')
      uInput.classList.remove('success')
      uError.innerText = "Username must be at least 5 characters"
    }else{
      uInput.classList.remove('error')
      uInput.classList.add('success')
      uError.innerText = ""
    }
    
  }

//checkEmail function
  function checkEmail(){
    
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    
    if(eInput.value === ""){
      eInput.classList.add('error')
      eInput.classList.remove('success')
      eError.innerText = "Email can't be empty"
    }
    //if email.does not match pattern
    else if(!eInput.value.match(pattern)){
      eInput.classList.add('error')
      eInput.classList.remove('success')
      eError.innerText = "Please enter a valid email"
    }else{
      eInput.classList.remove('error')
      eInput.classList.add('success')
      eError.innerText = ""
    }
}

//checkPass function

  function checkPass(){
    
    if(pInput.value === ""){
      pInput.classList.add('error')
      pInput.classList.remove('success')
      pError.innerText = "Password can't be empty"
    }
    else if(pInput.value.length < 8){
      pInput.classList.add('error')
      pInput.classList.remove('success')
      pError.innerText = "Password must be at least 8 characters"
    }
    else{
      pInput.classList.remove('error')
      pInput.classList.add('success')
      pError.innerText = ""
    }
  }
  
  //checkPass2 l.e confirm password function
  
  function checkPass2(){
    
    if(cInput.value === ""){
      cInput.classList.add('error')
      cInput.classList.remove('success')
      cError.innerText = "Password can't be empty"
    }else if(cInput.value !== pInput.value){
      cInput.classList.add('error')
      cInput.classList.remove('success')
      cError.innerText = "passwords do not match"
    }
    else{
      cInput.classList.remove('error')
      cInput.classList.add('success')
      cError.innerText = ""
    }
  }
  
  //check gender function
  function checkGender() {
    if(!gMaleInput.checked && !gFemaleInput.checked){
      gError.textContent = "Please select your gender"
    }else{
      gError.textContent = ""
    }
    gMaleInput.addEventListener('click', () => {
      let inputChecked = document.querySelector("#malebtn").checked
      if (inputChecked) {  
        gMaleInputCheck.style.backgroundColor = "#323"
        gFemaleInputCheck.style.backgroundColor = "hsl(0, 0%, 6%)"
      }
    })
    gFemaleInput.addEventListener('click', () => {
      let inputChecked = document.querySelector("#femalebtn").checked
      if (inputChecked) {  
        gFemaleInputCheck.style.backgroundColor = "#323"
        gMaleInputCheck.style.backgroundColor = "hsl(0, 0%, 6%)"
      }
    })
  }


  if ((uInput.classList.contains("success")) && (eInput.classList.contains('success')) && (cInput.classList.contains('success')) && (gMaleInput.checked || gFemaleInput.checked)) {
    window.location.href = form.getAttribute("action");
  }
})

const passToggle = document.querySelector(".togglepass")
const confirmToggle = document.querySelector(".toggleconfirm")

passToggle.addEventListener("click", () => {
  if(pInput.type === "password"){
    pInput.type = "text"
    passToggle.classList.replace("fa-eye", "fa-eye-slash")
  }else{
    pInput.type = "password"
    passToggle.classList.replace("fa-eye-slash", "fa-eye")
  }
})
confirmToggle.addEventListener("click", () => {
  if(cInput.type === "password"){
    cInput.type = "text"
    confirmToggle.classList.replace("fa-eye", "fa-eye-slash")
  }else{
    cInput.type = "password"
    confirmToggle.classList.replace("fa-eye-slash", "fa-eye")
  }
})