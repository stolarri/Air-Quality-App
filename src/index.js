import "./style.css";
import _ from 'lodash';
console.log("Hello Best Team Ever!");
import api from './AirDataProvider.js';

api.getCountries().then(

    function(result){
        console.log(result);
    }
);