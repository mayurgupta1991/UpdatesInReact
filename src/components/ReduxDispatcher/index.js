import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import WebRtc from './WebRtc';
import changeButtonStatus from '../../actions/common';

function ReduxDispatcher({ buttonState, updateButtonState }) {
    const infoObject = {
        roomname : "test33333",
        signalmasterUrl : "www.example.com"
    };
    return (
        <div>
            <RaisedButton
                label={buttonState}
                onClick={updateButtonState}
            />
            <WebRtc obj={infoObject}/>
        </div>
    );
}

ReduxDispatcher.propTypes = {
    buttonState: PropTypes.string.isRequired,
    updateButtonState: PropTypes.func.isRequired,
};

const mapStateToProps = reduxState => ({
    buttonState: reduxState.appData.buttonState,
});

const mapDispatchToProps = dispatch => ({
    updateButtonState() {
        dispatch(changeButtonStatus());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxDispatcher);
