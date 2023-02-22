import React from 'react';
import '../style.css';
import PropTypes from 'prop-types';

function SearchBox({ placeholder, onSearchChange }) {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={onSearchChange}
    />
  );
}

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  onSearchChange: PropTypes.func,
};

SearchBox.defaultProps = {
  placeholder: '',
  onSearchChange: () => {},
};

export default SearchBox;
