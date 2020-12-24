import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import urls from 'src/config/Urls';
import Layout from 'src/core/view/Layout';
import Dashboard from 'src/dashboard';

export default class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path={urls.pageDashboard()} component={Dashboard} />
                </Switch>
            </Layout>
        )
    }
}