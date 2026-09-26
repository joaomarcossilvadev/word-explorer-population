import { useEffect, useMemo, useState } from 'react';
import './FilterCountries.css';

function FilterCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('Todos');
  const [sortBy, setSortBy] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const countriesPerPage = 3;

  useEffect(() => {
    async function fetchCountries() {
      try {
        setLoading(true);
        setError('');

        const response = await fetch(
          'https://countries.dev/countries'
        );

        if (!response.ok) {
          throw new Error('Erro ao buscar países.');
        }

        const data = await response.json();

        setCountries(data);
      } catch (error) {
        setError('Não foi possível carregar os países.');
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [continent, sortBy]);

  const filteredCountries = useMemo(() => {
    const filtered = countries.filter((country) => {
      if (continent === 'Todos') {
        return true;
      }

      return country.region === continent;
    });

    return [...filtered].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name, 'pt-BR');
      }

      if (sortBy === 'population') {
        return (b.population || 0) - (a.population || 0);
      }

      if (sortBy === 'area') {
        return (b.area || 0) - (a.area || 0);
      }

      if (sortBy === 'density') {
        return (
          (b.populationDensity || 0) -
          (a.populationDensity || 0)
        );
      }

      return 0;
    });
  }, [countries, continent, sortBy]);

  const totalPages = Math.ceil(
    filteredCountries.length / countriesPerPage
  );

  const visibleCountries = filteredCountries.slice(
    (currentPage - 1) * countriesPerPage,
    currentPage * countriesPerPage
  );

  const mostPopulous = useMemo(() => {
    return [...countries]
      .sort(
        (a, b) =>
          (b.population || 0) - (a.population || 0)
      )
      .slice(0, 3);
  }, [countries]);

  function formatPopulation(value) {
    if (!value) {
      return 'Não informado';
    }

    return value.toLocaleString('pt-BR');
  }

  function formatArea(value) {
    if (!value) {
      return 'Não informado';
    }

    return `${value.toLocaleString('pt-BR')} km²`;
  }

  function formatDensity(value) {
    if (!value) {
      return 'Não informado';
    }

    return `${value.toLocaleString('pt-BR', {
      maximumFractionDigits: 1
    })} hab/km²`;
  }

  function handlePageChange(page) {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);

    window.scrollTo({
      top:
        document.querySelector('.filter-countries')?.offsetTop ||
        0,
      behavior: 'smooth'
    });
  }

  function getPaginationPages() {
    if (totalPages <= 5) {
      return Array.from(
        { length: totalPages },
        (_, index) => index + 1
      );
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, 'dots', totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [
        1,
        'dots',
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      ];
    }

    return [
      1,
      'dots',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      'dots-end',
      totalPages
    ];
  }

  if (loading) {
    return (
      <section className="filter-countries">
        <div className="filter-countries__container">
          <p className="filter-countries__status">
            Carregando países...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="filter-countries">
        <div className="filter-countries__container">
          <p className="filter-countries__error">
            {error}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="filter-countries">
      <div className="filter-countries__container">

        <header className="filter-countries__header">
          <span className="filter-countries__label">
            Explorar países
          </span>

          <h2>Filtre e organize os países</h2>

          <p>
            Explore os países do mundo através de
            diferentes critérios populacionais e geográficos.
          </p>
        </header>

        <div className="filter-countries__filters">

          <div className="filter-countries__field">
            <label htmlFor="continent">
              Continente
            </label>

            <select
              id="continent"
              value={continent}
              onChange={(event) =>
                setContinent(event.target.value)
              }
            >
              <option value="Todos">
                Todos os continentes
              </option>

              <option value="Africa">
                África
              </option>

              <option value="Americas">
                Américas
              </option>

              <option value="Asia">
                Ásia
              </option>

              <option value="Europe">
                Europa
              </option>

              <option value="Oceania">
                Oceania
              </option>

              <option value="Polar">
                Polar
              </option>
            </select>
          </div>

          <div className="filter-countries__field">
            <label htmlFor="sort">
              Ordenar por
            </label>

            <select
              id="sort"
              value={sortBy}
              onChange={(event) =>
                setSortBy(event.target.value)
              }
            >
              <option value="name">
                Nome
              </option>

              <option value="population">
                População
              </option>

              <option value="area">
                Área
              </option>

              <option value="density">
                Densidade populacional
              </option>
            </select>
          </div>

        </div>

        <div className="filter-countries__content">

          <div className="filter-countries__results">

            <div className="filter-countries__results-header">
              <h3>Países</h3>

              <span>
                {filteredCountries.length} países
              </span>
            </div>

            <div className="filter-countries__list">

              {visibleCountries.map((country) => (
                <article
                  className="filter-country-card"
                  key={country.alpha2Code}
                >
                  <div className="filter-country-card__flag">
                    <img
                      src={`https://flagcdn.com/w160/${country.alpha2Code.toLowerCase()}.png`}
                      alt={`Bandeira de ${country.name}`}
                    />
                  </div>

                  <div className="filter-country-card__info">
                    <h4>{country.name}</h4>

                    <span>
                      {country.region ||
                        'Região não informada'}
                    </span>
                  </div>

                  <div className="filter-country-card__data">

                    <div>
                      <small>População</small>

                      <strong>
                        {formatPopulation(
                          country.population
                        )}
                      </strong>
                    </div>

                    <div>
                      <small>Área</small>

                      <strong>
                        {formatArea(country.area)}
                      </strong>
                    </div>

                    <div>
                      <small>Densidade</small>

                      <strong>
                        {formatDensity(
                          country.populationDensity
                        )}
                      </strong>
                    </div>

                  </div>
                </article>
              ))}

            </div>

            {totalPages > 1 && (
              <nav
                className="countries-pagination"
                aria-label="Paginação dos países"
              >
                <button
                  className="countries-pagination__arrow"
                  onClick={() =>
                    handlePageChange(currentPage - 1)
                  }
                  disabled={currentPage === 1}
                  aria-label="Página anterior"
                >
                  ←
                </button>

                <div className="countries-pagination__numbers">

                  {getPaginationPages().map((page, index) => {

                    if (
                      page === 'dots' ||
                      page === 'dots-end'
                    ) {
                      return (
                        <span
                          className="countries-pagination__dots"
                          key={`${page}-${index}`}
                        >
                          ...
                        </span>
                      );
                    }

                    return (
                      <button
                        key={page}
                        className={`countries-pagination__number ${
                          currentPage === page
                            ? 'active'
                            : ''
                        }`}
                        onClick={() =>
                          handlePageChange(page)
                        }
                        aria-label={`Página ${page}`}
                        aria-current={
                          currentPage === page
                            ? 'page'
                            : undefined
                        }
                      >
                        {page}
                      </button>
                    );
                  })}

                </div>

                <button
                  className="countries-pagination__arrow"
                  onClick={() =>
                    handlePageChange(currentPage + 1)
                  }
                  disabled={
                    currentPage === totalPages
                  }
                  aria-label="Próxima página"
                >
                  →
                </button>
              </nav>
            )}

          </div>

          <aside className="most-populous">

            <div className="most-populous__header">
              <span>🌎</span>

              <div>
                <h3>Mais populosos</h3>

                <p>
                  Top 3 países do mundo
                </p>
              </div>
            </div>

            <div className="most-populous__list">

              {mostPopulous.map((country, index) => (
                <article
                  className="popular-country"
                  key={country.alpha2Code}
                >
                  <span className="popular-country__position">
                    {index + 1}
                  </span>

                  <img
                    src={`https://flagcdn.com/w80/${country.alpha2Code.toLowerCase()}.png`}
                    alt={`Bandeira de ${country.name}`}
                  />

                  <div className="popular-country__info">
                    <h4>{country.name}</h4>

                    <span>
                      {formatPopulation(
                        country.population
                      )}
                    </span>
                  </div>
                </article>
              ))}

            </div>

          </aside>

        </div>

      </div>
    </section>
  );
}

export default FilterCountries;