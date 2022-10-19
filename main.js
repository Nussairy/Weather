let weather = [];

document.querySelector(".btn").addEventListener("click", function (e) {
  weather.pop();
  let userValue = document.querySelector("input").value;
  getSearchValue(userValue);
});

function getSearchValue(term) {
  let myReq = new XMLHttpRequest();
  myReq.open("GET", `http://api.weatherapi.com/v1/current.json?key=9dbf29fdb1184f128f871044223105&q=${term}&aqi=no`);
  myReq.send();
  myReq.addEventListener("readystatechange", function () {
    if (myReq.readyState == 4 && myReq.status == 200) {
      weather.push(JSON.parse(myReq.response));
      console.log(weather);
      display();
    }
  });
}

function display() {
  let cartona = ``;
  for (let i = 0; i < weather.length; i++) {
    cartona += `<div class="text-light">
    <h4 class="mb-4 text-center">${weather[i].location.name}</h4>
    <div class="d-flex justify-content-around align-items-center">
        <h1 class="me-4">${weather[i].current.temp_c}°C</h1>
        <img src="${weather[i].current.condition.icon}" alt="icon" class="w-100">  
    </div>
</div>`
  }
  document.querySelector(".display").innerHTML = cartona;
}