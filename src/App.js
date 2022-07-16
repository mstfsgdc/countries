import { useEffect, useState } from "react";

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => setCountries(data));
  }, [])

  return (
    <div className="flex flex-wrap justify-center w-full h-full min-h-full bg-slate-400 font-poppins">
      {countries.map((country, index) => {
        return (
          <div key={index} className="p-2 m-2 rounded bg-slate-300 hover:bg-slate-300/60 w-fit h-fit max-w-[10rem] flex flex-col items-center text-center">
            <h1 className="text-xs font-bold">Country Name: <span className="font-normal underline decoration-dashed"><a href={"https://en.wikipedia.org/wiki/" + (country.name.common).replace(/ /g,"_")} target="_blank" rel="noreferrer">{country.name.common}</a></span></h1>
            <h2 className="mt-2 mb-2 text-xs font-bold">Capital: <span className="font-normal underline decoration-dashed"><a href={"https://en.wikipedia.org/wiki/" + country.capital} target="_blank" rel="noreferrer">{country.capital}</a></span></h2>
            <p className="my-2"><img src={country.flags.svg} alt={country.name.common + " flag"} className="w-24" /></p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
