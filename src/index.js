import "./style.css";
import "@babel/polyfill";
import Provider from "./AirDataProvider";
import { getCountryOptions, getStateOptions } from "./getOptions";

const selects = {
  country: document.querySelector("#country"),
  city: document.querySelector("#city"),
  state: document.querySelector("#state")
};

const isDisabled = {
  city: true,
  state: true
};

Provider.getCountries().then(arr => {
  selects.country.innerHTML += getCountryOptions(arr);
  selects.country.options[0].disabled = true;
});

selects.city.disabled = isDisabled.city;
selects.state.disabled = isDisabled.state;

selects.country.addEventListener("change", function(e) {
  Provider.getStates(this.value).then(arr => {
    selects.state.innerHTML = getStateOptions(arr);
    selects.state.disabled = false;
  });
});
