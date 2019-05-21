const pg = require("pg");
const settings = require("./settings"); // settings.json
const client = new pg.Client({
    user: settings.user,
    password: settings.password,
    database: settings.database,
    host: settings.hostname,
    port: settings.port,
    ssl: settings.ssl
});
client.connect((err) => {
    if (err) {
        return console.log("Connection Error", err)
    } else {
        console.log('connected to test_db now!!!')
    }
})
function getUserWithFirstName(firstname, callback) {
    client.query(`SELECT * FROM famous_people WHERE first_name LIKE $1::text`, [firstname])
        .then(response => {
            callback(null, response.rows)
        })
        .catch(error => {
            callback(error)
        })

}
getUserWithFirstName(process.argv[2], function (err, output) {
    if (!err) {
        let userNumber = output.length;
        console.log(
            `Searching ... \nFound ${userNumber} person(s) by the name '${process.argv[2]}':`
        )
        output.forEach((element, index) => {
            let year = element.birthdate.getFullYear()
            let month = element.birthdate.getMonth()
            let thedate = element.birthdate.getDate()
            console.log(`- ${index + 1}: ${element.first_name} ${element.last_name}, born '${year}-${month}-${thedate}'`)
        })
    } else {
        console.log(err)
    }
})

