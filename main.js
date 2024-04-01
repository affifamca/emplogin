//login
const login = () => {
    if(usernameInput.value && pswdInput.value){
            console.log(usernameInput.value,pswdInput.value);
            sessionStorage.setItem("username",usernameInput.value)
            sessionStorage.setItem("password",pswdInput.value)
        //navigate to dashboard page
               window.location = "dashboard.html"
            }else{
        alert("plese fill the form completely!!!")
    }
}