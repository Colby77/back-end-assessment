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
        const fortunes = [
              'Please visit us at www.wontonfood.com',
              'The strong person understands how to withstand substantial loss',
              'If you think you can do a thing or think you can’t do a thing, you’re right',
              'Miles are covered one step at a time',
              'You only treasure what you lost',
              'You love chinese food',
        ]
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
      }
}