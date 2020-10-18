import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

MainContain.propTypes = {

};

function MainContain(props) {
    return (
        <div>
            <Route path="/categories">
                {}
            </Route>
        </div>
    );
}

export default MainContain;