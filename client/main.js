let fortuneText = document.getElementById('fortuneText')
let createFortuneText = document.getElementById('createFortuneText')
let createFortune = document.getElementById('createFortune')

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

createFortune.addEventListener('click', createFortunePost)

function createFortunePost(){
    console.log('clicked')
    axios.post("http://localhost:4000/api/fortuneTell",{"fortune": "how do you get this to work?"})
    .then((res) => {
        console.log(res.data)
    })
}


// const createMovie = body => axios.post(baseURL, body).then(moviesCallback).catch(errCallback)

// document.getElementById('createFortune').onclick = function(){
//     console.log('clicked')
//     axios.post('http://localhost:4000/api/fortuneCreation', body)
//     .then((res) => {
//         console.log(res)
//     })
//     .catch(err => console.error(err))
// }