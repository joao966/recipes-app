import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardItem extends Component {
  render() {
    const { name, image, index } = this.props;
    return (
      <div
        data-testid={ `${index}-recipe-card` }
        style={{color: "#FFF"}}
      >
        <p style={{fontSize: "16px"}} data-testid={ `${index}-card-name` }>{name}</p>
        <img
          data-testid={ `${index}-card-img` }
          src={ image }
          alt={ name }
          width="40px"
        />
      </div>
    );
  }
}

CardItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default CardItem;
