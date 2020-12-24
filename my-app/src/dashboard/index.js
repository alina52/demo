import React, { Component } from 'react'
import News from 'src/dashboard/view/NewsRedux'
import NewsAnalysisDetailPopup from 'src/dashboard/view/NewsAnalysisDetailPopupRedux'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <News />
                <NewsAnalysisDetailPopup />
            </div>
        )
    }
}