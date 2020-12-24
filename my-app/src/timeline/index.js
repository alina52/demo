import React, { Component } from 'react'
import TimelinePage from 'src/timeline/view/TimelinePageRedux'
import NewsAnalysisDetailPopup from 'src/dashboard/view/NewsAnalysisDetailPopupRedux'

export default class TimelineContent extends Component {
    render() {
        return (
            <div>
                <TimelinePage />
                <NewsAnalysisDetailPopup />
            </div>
        )
    }
}