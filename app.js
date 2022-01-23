fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => displayCountries(data));


const displayCountries = countries =>{
  const countriesDiv = document.getElementById("country-name");
  countries.forEach((country) => {
    const countryDiv = document.createElement('div');
    countryDiv.className = 'country';
    const countryInfo = `
    <h3 class="country-name"> ${country.name.common}</h3>
    <p>${country.capital}</p>
    <button onclick="countryDetails('${country.name.common}')"> Details </button>
    `;
    countryDiv.innerHTML = countryInfo;
    countriesDiv.appendChild(countryDiv)
  });
}

const countryDetails = name =>{
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => renderVountryInfo(data[0]));
}

const renderVountryInfo = country =>{
    const countryDivs = document.getElementById('countryDetail');
    countryDivs.innerHTML = `
    <h1>${country.name.common}</h1>
      <p> Population: ${country.population}</p>
      <p> Area: ${country.area}</p>
      <img src="${country.flags.png}">
    `;
}

// const displayCountries = countries =>{
//     const countriesDiv = document.getElementById('countries');
//     countries.forEach((country) => {
//           const countryDiv = document.createElement('div');
//           countryDiv.className = 'country';
//           const countyInfo = `
//           <h3 class="country-name">${country.name.common}</h3>
//           <p>${country.capital}</p>
//           <button onclick="displayCountryDetail('${country.name.common}')">Details</button>
//           `;
//           countryDiv.innerHTML = countyInfo;
//           countriesDiv.appendChild(countryDiv);
//     });
//     const displayCountryDetail = name => {
//       const url = `https://restcountries.com/v3.1/name/${name}`;
//       fetch(url)
//       .then(res =>res.json())
//       .then(data => renderCountryInfo(data[0]));
//     }

//     const renderCountryInfo = country =>{
//       const countryDiv = document.getElementById("countryDetail");
//       countryDiv.innerText = `
//       <h1>${country.name.common}</h1>
//       <p> Population: ${country.population}</p>
//       <p> Area: ${country.area}</p>
//       <img src="${country.flag}">
//       `
//     }







//     // ############## or  for loop ######### 
//     // for (let i = 0; i < countries.length; i++) {
//     //     const country = countries[i];
//     //     const countryDiv = document.createElement('div');
//     //     countryDiv.className = 'country';
//     //     // const h3 = document.createElement('h3');
//     //     // h3.innerText = country.name.common;
//     //     // const p = document.createElement('p');
//     //     // p.innerText = country.capital;
        
//     //     // countryDiv.appendChild(h3);
//     //     // countryDiv.appendChild(p);

//     //     const countyInfo = `
//     //     <h3 class="country-name">${country.name.common}</h3>
//     //     <p>${country.capital}</p>
//     //     `;
//     //     countryDiv.innerHTML = countyInfo;
//     //     countriesDiv.appendChild(countryDiv);
                
//     // }

// }