const fortunes = [
    'Please visit us at www.wontonfood.com',
    'The strong person understands how to withstand substantial loss',
    'If you think you can do a thing or think you can’t do a thing, you’re right',
    'Miles are covered one step at a time',
    'You only treasure what you lost',
    'You love chinese food',
]

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
      
        res.status(200).send(randomFortune);
      },
      
      createFortune: (req, res) => {
        //   let newFortune = req.body.data
          console.log(req.body.fortune)
          let newFortune = req.body.fortune
          fortunes.push(newFortune)
          res.status(200).send(req.body)
      }
}