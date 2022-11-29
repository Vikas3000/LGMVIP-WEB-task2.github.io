let box =document.getElementById("cards");
let API = async() => {

 let response = await fetch("https://reqres.in/api/users?page=1");
  let file = await response.json();

  let info = file.data
    .map((element) => {
      return `<div class="card">
        <div class="card-image">
            <img src="bg.jpg" alt="">
        </div>
        <div class="profile-image">
            <img src="${element.avatar}" alt="">
        </div>
        <div class="card-content">
            <h4>${element.first_name} ${element.last_name}</h4>
            <h5>${element.email}</h5>
            <h5>User ID: ${element.id}</h5>
        </div>
    </div>`;
    })
    
    .join("");
  cards.innerHTML = info;
};

let getUser = document.getElementById("navbtn");
getUser.addEventListener("click", () => {
  cards.innerHTML = `<h1 class='load'>Scanning Data Please wait.....</h1>`;
  setTimeout(() => {
    API();
  }, 200);
});