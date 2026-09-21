import "./CardCountry.css";

const countryNames = {
  Brazil: "Brasil",
  Germany: "Alemanha",
  France: "França",
  Spain: "Espanha",
  Italy: "Itália",
  Portugal: "Portugal",
  Japan: "Japão",
  China: "China",
  India: "Índia",
  Canada: "Canadá",
  Mexico: "México",
  Argentina: "Argentina",
  Chile: "Chile",
  Colombia: "Colômbia",
  Australia: "Austrália",
  Egypt: "Egito",
  Russia: "Rússia",
  "United States": "Estados Unidos",
  "United Kingdom": "Reino Unido",
};

function CardCountry({ country }) {
  return (
    <article className="country-card">
      <div className="country-card__image">
        <img
          src={`https://flagcdn.com/w640/${country.alpha2Code.toLowerCase()}.png`}
          alt={`Bandeira de ${country.name}`}
        />
      </div>

      <div className="country-card__content">
        <div className="country-card__header">
          <div>
            <h2 className="country-card__name">
              {countryNames[country.name] || country.name}
            </h2>

            <p className="country-card__region">
              {country.region}
            </p>
          </div>
        </div>

        <div className="country-card__population">
          <div className="population-icon" aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
              />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>

          <div className="population-info">
            <span>População</span>

            <strong>
              {country.population.toLocaleString("pt-BR")}
            </strong>
          </div>
        </div>

        <div className="country-card__capital">
          <span>Capital</span>

          <strong>
            {country.capital || "Não informado"}
          </strong>
        </div>
      </div>
    </article>
  );
}

export default CardCountry;