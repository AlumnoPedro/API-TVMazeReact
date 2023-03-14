import React from 'react';
import PropTypes from 'prop-types';

function Pagination({ totalPosts, postsPerPage, setCurrentPage }) {
  const paginas = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
    paginas.push(i);
  }
  return (
    <div>
      {
            paginas.map((pagina) => (
              <button
                type="button"
                className="botonPaginacion"
                key={pagina}
                onClick={() => setCurrentPage(pagina)}
              >
                {pagina}
              </button>
            ))
        }
    </div>
  );
}
Pagination.propTypes = {
  totalPosts: PropTypes.number.isRequired,
  postsPerPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
