import React from 'react';
import PropTypes from 'prop-types';

const NextArrow = (props) => {
    const { style, onClick, slideCount } = props;
    return (
      slideCount ? (
        <div
          style={{ ...style }}
          onClick={onClick}
        >
          <i>navigate_next</i>
        </div>
        ) : null
    );
}

NextArrow.defaultProps = {
    style: {},
    slideCount: 0,
    onClick: () => {},
};

NextArrow.propTypes = {
    style: PropTypes.object,
    slideCount: PropTypes.number,
    onClick: PropTypes.func,
};

export default NextArrow;
