import PropTypes from 'prop-types';

const SearchInput = ({ onChange }) => {
  return <input onChange={onChange} />;
};

export default SearchInput;

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};
