import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import 'src/core/view/LayoutHeader.css'

export default class LayoutHeader extends Component {
    constructor(props, defaultProps) {
        super(props, defaultProps)
        this.state = {}
    }
    componentDidMount() {
        var tabValue = 'dashboard'
        this.props.onPageLoaded(tabValue)
    }

    handleTabChange = (event, value) => {
        this.props.changeHeaderPageTab(value)
    }

    render() {
        const { tabValue } = this.props
        return (
            <AppBar className="header-appbar" color="default">
                <Tabs className="header-tabs" indicatorColor="primary" textColor="primary" value={tabValue} onChange={this.handleTabChange}>
                    <Tab className="header-tab-logo" label="政治事件分析" />
                    <Tab value="dashboard" label="DashBoard" />
                    <Tab value="timeline" label="TimeLine" />
                </Tabs>
            </AppBar>

        )
    }
}