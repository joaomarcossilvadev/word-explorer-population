import { useState } from "react";
import "./CountryList.css";
import CardCountry from "../CardCountry/CardCountry";

function CountryList({ countries }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCountries = countries.slice(
    currentIndex,
    currentIndex + 3
  );

  function handleNext() {
    if (currentIndex + 3 < countries.length) {
      setCurrentIndex(currentIndex + 3);
    }
  }

  function handlePrevious() {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  }

  return (
    <section className="country-list" aria-label="Lista de países">
      <div className="country-list__container">

        <button
          className="country-list__button country-list__button--previous"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          aria-label="Países anteriores"
        >
          ←
        </button>

        <div className="country-list__cards">
          {visibleCountries.map((country) => (
            <CardCountry
              key={country.alpha2Code}
              country={country}
            />
          ))}
        </div>

        <button
          className="country-list__button country-list__button--next"
          onClick={handleNext}
          disabled={currentIndex + 3 >= countries.length}
          aria-label="Próximos países"
        >
          →
        </button>

      </div>
    </section>
  );
}

export default CountryList;