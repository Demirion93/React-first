import React from 'react';
import styles from './SearchResults.scss';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon.js';

class SearchResults extends React.Component {

  static propTypes = {
    cards: PropTypes.array,  
    title: PropTypes.string,
    icon: PropTypes.string,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResults;
