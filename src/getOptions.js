const getCountryOptions = arr => {
  const options = arr.map(item => {
    console.log(item);
    return `<option value="${item.country}">${item.country}</option>`;
  });
  return options.join("");
};

const getStateOptions = arr => {
  const options = arr.map(item => {
    console.log(item);
    return `<option value="${item.state}">${item.state}</option>`;
  });
  return options.join("");
};

export { getCountryOptions, getStateOptions };
