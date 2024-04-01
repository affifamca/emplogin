//login
const login = ()=>{
    if(usernameInput.value && pswdInput.value){
        console.log(usernameInput.value,pswdInput.value);
       sessionStorage.setItem("username",usernameInput.value)
       sessionStorage.setItem("password",pswdInput.value) 
       //navigate to dashboard page
         setTimeout(()=>{
            window.location = "dashbord.html"
         }, 2000);
    }else{
        alert("please fill the form completely!!!")
    }
}