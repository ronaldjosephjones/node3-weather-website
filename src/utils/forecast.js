const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=5e51220cf74d920c645823df1c5606ec&query=' + latitude + ',' + longitude +'&units=f'

    request({ url, json:true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'It is currently ' + body.current.temperature + ", but it feels like " + body.current.feelslike + '.')
        }
    })
}

module.exports = forecast