import './CountryDetails.css';

function CountryDetails({ country, onClose }) {
  if (!country) return null;

  return (
    <div className="country-modal" onClick={onClose}>
      <div
        className="country-modal__content"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="country-modal__close"
          onClick={onClose}
          aria-label="Fechar detalhes do país"
        >
          ×
        </button>

        <div className="country-modal__header">
          <img
            src={`https://flagcdn.com/w320/${country.alpha2Code.toLowerCase()}.png`}
            alt={`Bandeira de ${country.name}`}
          />

          <div>
            <h2>{country.name}</h2>
            <p>{country.region || 'Região não informada'}</p>
          </div>
        </div>

        <div className="country-modal__body">
          <div className="country-detail">
            <span>👥</span>
            <div>
              <small>População</small>
              <strong>
                {country.population?.toLocaleString('pt-BR') || 'Não informado'}
              </strong>
            </div>
          </div>

          <div className="country-detail">
            <span>📍</span>
            <div>
              <small>Capital</small>
              <strong>
                {country.capital || 'Não informado'}
              </strong>
            </div>
          </div>

          <div className="country-detail">
            <span>🌎</span>
            <div>
              <small>Região</small>
              <strong>
                {country.region || 'Não informado'}
              </strong>
            </div>
          </div>

          <div className="country-detail">
            <span>🏳️</span>
            <div>
              <small>Código do país</small>
              <strong>
                {country.alpha2Code || 'Não informado'}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
