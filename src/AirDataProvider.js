const API_KEY = "49a7798c-f694-44cc-8c3d-f6a735a7d274";
const baseURL = "https://api.airvisual.com/v2/";

export default class AirDataProvider {
  static async getCountries() {
    const response = await fetch(`${baseURL}countries?key=${API_KEY}`);
    const json = await response.json();
    return json.data;
  }

  static async getStates(country) {
    const response = await fetch(
      `${baseURL}states?country=${country}&key=${API_KEY}`
    );
    const json = await response.json();
    return json.data;
  }

  // poniższa funkcje do poprawki analogicznie do powyższego
  static async getCities(state, country) {
    var array;
    await fetch(
      `${baseURL}cities?state=${state.state}&country=${country.country}&key=${API_KEY}`
    )
      .then(async function(result) {
        let json = await result.json();
        array = json.data;
      })
      .catch(function(error) {
        console.log(error);
      });
    return array;
  }
}
