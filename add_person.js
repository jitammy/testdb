var config = require ('./knexfile')
var knex = require('knex')
var db = knex(config.development)

db.insert({first_name:"Justin", last_name: "Biber", birthdate: "1994-03-01"}).into("famous_people")
  .then(function(results){
      db("famous_people").select("*")
      .then(function(results){
    console.log(results)
      })
      .then(function(){
        db.destroy()
      })
  })




  