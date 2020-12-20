import React, { Component } from 'react'
import 'src/core/view/LayoutBody.css'
import Dashboard from 'src/dashboard'
export default class LayoutBody extends Component {
    render() {
        const { tabValue } = this.props
        return (
            <section className="layout-container layout-body">
                <div className="main-content">
                {/* {tabValue === 'dashboard' && <Dashboard />}
                    {tabValue === 'timeline' && <TimeLine />} */}
                    {tabValue === 'dashboard' && <Dashboard />}
                    {tabValue === 'timeline' && "Timeline"}
                </div>
            </section>
        )
    }
}