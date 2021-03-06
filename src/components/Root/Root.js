import React from 'react';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import theme from '../../theme/theme';
import App from '../App/App';
import CheckOut from '../CheckOut/CheckOut';
import ProductDetail from '../ProductDetails/ProductDetails';
import ProductList from '../ProductList/ProductList';
import '../../reducers/products';
export default class Root extends React.Component {
    constructor(props) {
        super(props);

        // Needed for onTouchTap
        injectTapEventPlugin();
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path={'/'} component={App}>
                    <IndexRedirect to={'products'} />
                    <Route path={'products'} component={ProductList} onEnter={ProductList.getProducts}/>
                    <Route path={'products/:sku'} component={ProductDetail} onEnter={ProductDetail.getProductDetails}/>
                    <Route path={'checkout'} component={CheckOut} />
                </Route>
            </Router>
        );
    }

    getChildContext() {
        return {muiTheme: getMuiTheme(theme)};
    }

    static get childContextTypes() {
        return {muiTheme: React.PropTypes.object.isRequired};
    }
}