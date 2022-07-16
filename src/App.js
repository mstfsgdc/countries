import { useEffect, useState } from "react";

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => setCountries(data));
  }, [])

  return (
    <div className="flex flex-wrap w-full h-full font-poppins">
      {console.log(countries[0])}
      {countries.map((country, index) => {
        return (
          <div key={index} className="p-2 m-2 rounded bg-slate-300 w-fit h-fit max-w-[10rem] min-h-[14rem] flex flex-col items-center text-center">
            <span className="text-xs text-slate-400">id: {index}</span>
            <h1 className="text-xs font-bold">Country Name: <span className="font-normal underline decoration-dashed"><a href={"https://en.wikipedia.org/wiki/" + (country.name.common).replace(/ /g,"_")} target="_blank" rel="noreferrer">{country.name.common}</a></span></h1>
            <h2 className="mt-2 mb-2 text-xs font-bold">Capital: <span className="font-normal underline decoration-dashed"><a href={"https://en.wikipedia.org/wiki/" + country.capital} target="_blank" rel="noreferrer">{country.capital}</a></span></h2>
            <p className="mt-auto"><img src={country.flags.svg} alt={country.name.common + " flag"} className="w-24" /></p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
