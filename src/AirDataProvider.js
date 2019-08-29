const fetch = require('node-fetch');
const API_KEY = '49a7798c-f694-44cc-8c3d-f6a735a7d274';
const baseURL = 'https://api.airvisual.com/v2/';
class AirDataProvider {
    static async getCountries() {
        var array;
        await fetch(`${baseURL}countries?key=${API_KEY}`).then(
            async function (result) {
                let json = await result.json();
                array = json.data;
            }
        ).catch(
            function (error) {
                console.log(error);
            }
        )
        return array;
    }
    static async getStates(country) {
        var array;
        await fetch(`${baseURL}states?country=${country.country}&key=${API_KEY}`)
            .then(async function (result) {
                let json = await result.json();
                array = json.data;
            })
            .catch(
                function (error) {
                    console.log(error);
                }
            )
        return array;
    }
    static async getCities(state, country) {
        var array;
        await fetch(`${baseURL}cities?state=${state.state}&country=${country.country}&key=${API_KEY}`)
            .then(async function (result) {
                let json = await result.json();
                array = json.data;
            })
            .catch(function (error) {
                console.log(error);
            })
        return array;
    }
}

exports.api = AirDataProvider;