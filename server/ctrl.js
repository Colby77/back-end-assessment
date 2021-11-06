// const fortunes = [
//     'Please visit us at www.wontonfood.com',
//     'The strong person understands how to withstand substantial loss',
//     'If you think you can do a thing or think you can’t do a thing, you’re right',
//     'Miles are covered one step at a time',
//     'You only treasure what you lost',
//     'You love chinese food',
// ]

const fortunes = [
  {
    "id": 1,
    "fortune": "Please visit us at www.wontonfood.com"
  },
  {
    "id": 2,
    "fortune": "The strong person understands how to withstand substantial loss"
  },
  {
    "id": 3,
    "fortune": "If you think you can do a thing or think you can’t do a thing, you’re right"
  },
  {
    "id": 4,
    "fortune": "Miles are covered one step at a time"
  },
  {
    "id": 5,
    "fortune": "You only treasure what you lost"
  },
  {
    "id": 6,
    "fortune": "You love chinese food"
  }
]
let lastFortuneId = 7

module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!",
                           "Cool shirt!",
                           "Your Javascript skills are stellar.",
        ];
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
        
      },
      getFortune: (req, res) => {
       
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        // let currentFortuneId = randomFortune.id
        // let randomFortuneContent = randomFortune.fortune
      
        res.status(200).send(randomFortune);
      },
      
      createFortune: (req, res) => {
        //   let newFortune = req.body.data
          console.log(req.body)
          let newFortune = req.body
          newFortune.id = lastFortuneId
          newFortune.fortune = req.body.fortune
          fortunes.push(newFortune)
          lastFortuneId += 1
          res.status(200).send(newFortune)
      },

      changeFate: (req, res) => {
        console.log(req.body)
        let {id} = req.params
        let {fortune} = req.body
        let index = fortunes.findIndex((element) => element.id === +id)
        fortunes[index].fortune = fortune
        res.status(200).send(fortune)
      },

      deleteFortune: (req, res) => {
        console.log(req.params.id)
        let {id} = req.params
        let index = fortunes.findIndex((element) => element.id === +id)
        fortunes.splice(index, 1)
        res.status(200).send(fortunes)
      }
      // example goals
      // addGoals: (req, res) => {
      //   console.log(req.body.data)
        
      //   res.sendStatus(200)
      // }
}