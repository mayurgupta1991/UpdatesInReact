import React from 'react';
import PropTypes from 'prop-types';

const PrevArrow = (props) => {
    const { style, onClick, slideCount } = props;
    return (
      slideCount ? (
        <div
          style={{ ...style }}
          onClick={onClick}
        >
          <i>navigate_previous</i>
        </div>
      ) : null
    );
}

PrevArrow.defaultProps = {
    style: {},
    slideCount: 0,
    onClick: () => {},
};

PrevArrow.propTypes = {
    style: PropTypes.object,
    slideCount: PropTypes.number,
    onClick: PropTypes.func,
};

export default PrevArrow;
