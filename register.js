let form = document.getElementsByClassName('form')[0]

if(localStorage.getItem('username') && localStorage.getItem('email') && localStorage.getItem('password')){
    document.getElementsByClassName('username')[0].value = localStorage.getItem('username')
    document.getElementsByClassName('email')[0].value = localStorage.getItem('email')
    document.getElementsByClassName('password')[0].value = localStorage.getItem('password')
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let username = document.getElementsByClassName('username')[0].value
    let email = document.getElementsByClassName('email')[0].value
    let password = document.getElementsByClassName('password')[0].value
    //localstorage
    localStorage.setItem('username',username)
    localStorage.setItem('email',email)
    localStorage.setItem('password',password)

    alert("Your details are saved")
})