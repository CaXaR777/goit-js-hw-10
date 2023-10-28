export { fetchCountries };

function fetchCountries(name) {
  const url = 'https://restcountries.com/v3.1/name/';
  const headers = '?name.official,capital,population,flags.svg,languages';
  return fetch(`${url}${name}${headers}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}


