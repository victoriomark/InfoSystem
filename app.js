const PassInput = document.querySelector("#password");
const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

 const ValidationForm = () =>{
            const btnLogin = document.querySelector("#Btnlogin");
            const UserInput = document.querySelector("#username");
            const Nofify = document.querySelector(".Notifaction")
            let NotifyText = document.getElementById("h3")
    btnLogin.addEventListener("click",()=>{
        if(pattern.test (UserInput.value) && PassInput.value === "1234"){
        Nofify.classList.add("NotifySuccess")
        Nofify.classList.add("affterbg")
        NotifyText.innerText = "Loading..."
        Nofify.classList.remove("affterInvalid")

        
        const timeOut = setTimeout(()=>{
         Nofify.classList.remove("NotifySuccess")
         window.location = 'http://127.0.0.1:5500/dasboard.html'
     },2000)
        }
        else{
            Nofify.classList.add("NofifyActive")
            Nofify.classList.add("affterInvalid")
            NotifyText.innerText = "invalid "
 
         const timeOut = setTimeout(()=>{
             Nofify.classList.remove("NofifyActive")
        },2000)
}
    })
}
ValidationForm();


