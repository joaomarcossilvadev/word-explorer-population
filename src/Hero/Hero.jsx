import { useState } from 'react';
import './Hero.css';
import CountryList from '../CountryList/CountryList';

const countryNames = {
  brasil: 'Brazil',
  alemanha: 'Germany',
  frança: 'France',
  espanha: 'Spain',
  itália: 'Italy',
  portugal: 'Portugal',
  japão: 'Japan',
  china: 'China',
  índia: 'India',
  canadá: 'Canada',
  méxico: 'Mexico',
  argentina: 'Argentina',
  chile: 'Chile',
  colômbia: 'Colombia',
  austrália: 'Australia',
  egito: 'Egypt',
  rússia: 'Russia',
  'estados unidos': 'United States',
  'reino unido': 'United Kingdom'
};

function Hero() {
  const [search, setSearch] = useState('');
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSearch(event) {
    const value = event.target.value;

    setSearch(value);

    if (!value.trim()) {
      setCountries([]);
      setError('');
      return;
    }

    const searchValue =
      countryNames[value.trim().toLowerCase()] || value;

    try {
      setLoading(true);
      setError('');

      const response = await fetch(
        `https://countries.dev/name/${encodeURIComponent(searchValue)}`
      );

      if (!response.ok) {
        setCountries([]);
        setError('Nenhum país encontrado.');
        return;
      }

      const data = await response.json();

      setCountries(data);
    } catch (error) {
      setCountries([]);
      setError('Erro ao buscar países.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">

          <h2>Explore a população do mundo</h2>

          <p className="hero-subtitle">
            Descubra dados populacionais de países, compare informações e
            explore o mundo através dos dados.
          </p>

          <div className="hero-search">
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <input
              type="search"
              placeholder="Pesquise por um país..."
              aria-label="Pesquisar país"
              value={search}
              onChange={handleSearch}
            />
          </div>
          <p className="hero-indicator">
            🌎 Mais de 190 países para explorar
          </p>

          {loading && (
            <p className="hero-status">
              Pesquisando...
            </p>
          )}

          {error && (
            <p className="hero-error">
              {error}
            </p>
          )}

          {!loading && countries.length > 0 && (
            <CountryList countries={countries} />
          )}

        </div>
      </div>
    </section>
  );
}

export default Hero;