import "./style.css";
<<<<<<< HEAD

console.log("Hello Best Team Ever!");
=======
import _ from 'lodash';
console.log("Hello Best Team Ever!");
import api from './AirDataProvider.js';

api.getCountries().then(

    function(result){
        console.log(result);
    }
);
>>>>>>> proper Node config for browser and ES6 style import in provider
