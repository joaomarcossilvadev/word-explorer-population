import "./CountryList.css";
import CardCountry from "../CardCountry/CardCountry";

function CountryList({ countries }) {
  return (
    <section className="country-list" aria-label="Lista de países">
      <div className="country-list__container">
        {countries.map((country) => (
          <CardCountry
            key={country.alpha2Code}
            country={country}
          />
        ))}
      </div>
    </section>
  );
}

export default CountryList;