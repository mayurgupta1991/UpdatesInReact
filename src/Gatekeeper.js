import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from './components/SpinnerLoader';
import { getUserStorage, getCookieUrl } from './util/browserStorage';
import { tokenGenerator } from './actions/configSettings';
import endpoints from './endpoints/authentication';
import mayur from './images/mayur.png';
import domtoimage from 'dom-to-image';

// This class is always rendered and decides whether we need a login
// page or to grant app access.

class Gatekeeper extends Component {

    state = {
        showSpinner: true,
    };

    /*componentWillMount() {
        const { createToken, setCookieUrl } = this.props;
        const accessToken = getUserStorage();
        setCookieUrl(getCookieUrl());
        if (accessToken) {
            createToken(accessToken);
            this.props.changeDashboardState({ status: true });
        } else {
            this.setState({ showSpinner: false });
        }
    }


    componentWillReceiveProps(nextProps) {
        const { isUserLoggedIn, isDashboardLoading } = nextProps;
        if (isUserLoggedIn && isDashboardLoading) {
            const url = endpoints.userInfoPath;
            this.setState({ showSpinner: true });
            this.props.fetchUserData(url).then(() => {
                this.props.changeDashboardState({ status: false });
                this.setState({ showSpinner: false });
            });
        }
    }*/


    handleImageErrored = () => {
        const node = document.getElementById('mainDiv');
        console.log('sdafsaads');
        domtoimage.toPng(node)
            .then(function (dataUrl) {
                var img = new Image();
                img.src = dataUrl;
                document.body.appendChild(img);
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });

    }

    render() {
        /*const { isUserLoggedIn } = this.props;
        const { showSpinner } = this.state;
        const showContent = isUserLoggedIn ? <AuthContent /> : <UnauthContent />;
        const content = showSpinner ? <Spinner /> : showContent;*/
        return (
          <div id="mainDiv">
            asdadasd as
              asdasdas
              asdasddas
              <img src={mayur} alt="appstore" width="400"
                   onLoad={this.handleImageErrored}
              />
              ljajsdjla
              alskjdasj
              ]asd;kad
          </div>
        );
    }

}
/*
Gatekeeper.propTypes = {
    isUserLoggedIn: PropTypes.bool.isRequired,
    isDashboardLoading: PropTypes.bool.isRequired,
    createToken: PropTypes.func.isRequired,
    fetchUserData: PropTypes.func.isRequired,
    changeDashboardState: PropTypes.func.isRequired,
    setCookieUrl: PropTypes.func.isRequired,
};

const mapStateToProps = reduxState => {
    return {
        isUserLoggedIn: reduxState.authentication.userLoggedIn,
        isDashboardLoading: reduxState.dashboardUiStatus.loading,
    };
};

const mapDispatchToProps = dispatch => ({
    createToken(accessToken) {
        dispatch(tokenGenerator(accessToken));
    },
    setCookieUrl(url) {
        dispatch(setEnableCookieUrl(url));
    },
    changeDashboardState(loadingStatus) {
        dispatch(changeDashboardLoadingStatus(loadingStatus));
    },
    fetchUserData(url) {
        return dispatch(fetchUserAndLoadData(url));
    },
});*/

export default Gatekeeper;
