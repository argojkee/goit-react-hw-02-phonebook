import PropTypes from 'prop-types';

const SearchInput = ({ onChange, value }) => {
  return <input value={value} onChange={onChange} />;
};

export default SearchInput;

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
