let fortuneText = document.getElementById('fortuneText')
let createFortuneInput = document.getElementById('createFortuneInput')
let createFortune = document.getElementById('createFortune')
let fateInput = document.getElementById('changeFateInput')
let changeFateBtn = document.getElementById('changeFateButton')
let deleteBtn = document.getElementById('deleteFortuneButton')


let currentFortuneId = 1

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
        fortuneText.textContent = response.data.fortune
        return currentFortuneId = response.data.id
    })
}


function createFortunePost(){
    axios.post("http://localhost:4000/api/fortuneTell",
    {
        "fortune": createFortuneInput.value
})
    .then((res) => {
        alert('Fortune predicted')
    })
}
createFortune.addEventListener('click', createFortunePost)


function fate(){
    axios.put(`http://localhost:4000/api/fortune/${currentFortuneId}`,
     {
         "fortune": fateInput.value
     })
     .then((res) => {
         alert('Fortune updated')
         fortuneText.textContent
     })
}

changeFateBtn.addEventListener('click', fate)

function deleteFortune(){
    axios.delete(`http://localhost:4000/api/fortune/${currentFortuneId}`)
    .then((res) => {
        alert("That fortune isn't true")
        console.log(res.data)
    })
}
deleteBtn.addEventListener('click', deleteFortune)

// goals example
// const addGoals = () => {
//     console.log(goalInput.value)
//     let body = goalInput.value
//     axios.post('http://localhost:4000/api/goals', {data: body})
//     .then(res => {
//         alert('goal added')

//     })
// }
// let goalBtn = document.getElementById('goal-button')
// let goalInput = document.getElementById('goal-name')

// goalBtn.addEventListener('click', addGoals)
