import './CardCountry.css';

function formatPopulation(value) {
  if (value >= 1_000_000_000_000) {
    return `${(value / 1_000_000_000_000).toLocaleString('pt-BR', {
      maximumFractionDigits: 1
    })} T`;
  }

  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toLocaleString('pt-BR', {
      maximumFractionDigits: 1
    })} B`;
  }

  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toLocaleString('pt-BR', {
      maximumFractionDigits: 1
    })} M`;
  }

  return value.toLocaleString('pt-BR');
}

function CardCountry({ country, onClick }) {
  return (
    <article
      className="country-card"
      onClick={onClick}
      role="button"
      tabIndex="0"
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          onClick();
        }
      }}
    >
      <div className="country-card__image">
        <img
          src={`https://flagcdn.com/w320/${country.alpha2Code.toLowerCase()}.png`}
          alt={`Bandeira de ${country.name}`}
        />
      </div>

      <div className="country-card__content">
        <header className="country-card__header">
          <h3 className="country-card__name">
            {country.name}
          </h3>

          <p className="country-card__region">
            {country.region}
          </p>
        </header>

        <div className="country-card__population">
          <div className="population-icon">
            <span>👥</span>
          </div>

          <div className="population-info">
            <span>População</span>

            <strong>
              {formatPopulation(country.population)}
            </strong>
          </div>
        </div>

        <div className="country-card__capital">
          <span>Capital</span>

          <strong>
            {country.capital || 'Não informado'}
          </strong>
        </div>
      </div>
    </article>
  );
}

export default CardCountry;