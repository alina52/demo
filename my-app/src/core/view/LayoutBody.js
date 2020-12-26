import React, { Component } from 'react'
import 'src/core/view/LayoutBody.css'
import Dashboard from 'src/dashboard'
import TimelineContent from 'src/timeline'
import Map from 'src/map'

export default class LayoutBody extends Component {
    render() {
        const { tabValue } = this.props
        return (
            <section className="layout-container layout-body">
                <div className="main-content">
                {/* {tabValue === 'dashboard' && <Dashboard />}
                    {tabValue === 'timeline' && <TimeLine />} */}
                    {tabValue === 'dashboard' && <Dashboard />}
                    {tabValue === 'timeline' && <TimelineContent />}
                    {tabValue === 'map' && <Map />}
                </div>
            </section>
        )
    }
}