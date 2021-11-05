let fortuneText = document.getElementById('fortuneText')

document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

document.getElementById('fortuneButton').onclick = function(){
    axios.get("http://localhost:4000/api/fortune")
    .then(function (response){
        console.log(response.data)
        fortuneText.textContent = ''
        fortuneText.textContent = response.data
    })
}