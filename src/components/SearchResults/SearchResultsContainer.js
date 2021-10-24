import {connect} from 'react-redux';
import {getCardsForSearchResults} from '../../redux/cardsRedux.js';
import SearchResults from './SearchResults';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.id;

  return {
    cards: getCardsForSearchResults(state, searchString),
  };
};

export default connect(mapStateToProps)(SearchResults);