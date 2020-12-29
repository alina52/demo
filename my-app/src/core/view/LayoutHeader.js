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
                <Tabs className="header-tabs" indicatorColor="primary" value={tabValue} onChange={this.handleTabChange}>
                    <Tab value="dashboard" label="" />
                    <Tab value="dashboard" label="" />
                    <Tab className="header-tab-logo" label="中文政治事件提取" />
                    <Tab value="dashboard" label="事件总览" />
                    <Tab value="timeline" label="时间线" />
                    <Tab value="map" label="事件地图" />
                </Tabs>
            </AppBar>

        )
    }
}