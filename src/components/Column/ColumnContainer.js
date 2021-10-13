import {connect} from 'react-redux';
import {getCardsForColumn, createActionAddCard} from '../../redux/cardsRedux.js';
import Column from './Column';

// export const getCardsForColumn = ({cards}, columnId) => {
//   console.log(cards, columnId);
//   return cards.filter(card => card.columnId == columnId);
// };

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});


const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);
