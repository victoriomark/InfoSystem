
const TbodyContainer = document.getElementById("data");
const btnSubmit = document.getElementById("btnSubmit");

const ButtonEvent = () => {
  const btnCreat = document.querySelector("#createBTN");
  const container = document.querySelector(".container");
  const x = document.querySelector("#remove")
  btnCreat.addEventListener("click", () => {
    container.classList.add("containActive");
    
  })
  x.addEventListener("click", () => {
    container.classList.remove("containActive")
  })
}

ButtonEvent();


// input value
const firsname = document.querySelector(".firstname")
const lastname = document.querySelector(".lastname")
const Age = document.querySelector(".age")


const forms = document.getElementById("forms").addEventListener("submit",(e)=>{
  e.preventDefault()

  })



  let DataArrray = [];
  var SavaData = () =>{
  DataArrray.push({
    FirstName: firsname.value,
    LastName: lastname.value,
    AGE: Age.value

  })
  // Save Data from LocalStorage
    localStorage.setItem('value',JSON.stringify(DataArrray));
  }



  const CreatingEl = () => {
    const CreateTr = document.createElement("tr")
    //     // CREATING T
    var retData = JSON.parse(localStorage.getItem('value'))
      const CreateTD_firstName = document.createElement("td");
      const CreateTD_lastName = document.createElement("td");
      const CreateTd_Age = document.createElement("td");
        retData.forEach( e => {
        CreateTd_Age.innerHTML = e.AGE
        CreateTD_firstName.innerHTML = e.FirstName;
        CreateTD_lastName.innerHTML = e.LastName;

  
        CreateTr.appendChild(CreateTD_firstName);
        CreateTr.appendChild(CreateTD_lastName);
        CreateTr.appendChild(CreateTd_Age);
        TbodyContainer.appendChild(CreateTr);

      })
    
  }

  CreatingEl();



  var retData = JSON.parse(localStorage.getItem('value')) || [];
  btnSubmit.addEventListener("click", () => {
        CreatingEl();
        SavaData();
       firsname.value = ""
       lastname.value = ""
       Age.value = ""
  })





