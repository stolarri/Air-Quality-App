import provider from "AirDataProvider";

const getData = async () => {
  const data = {};

  data.countries = provider.getCountries();
};
