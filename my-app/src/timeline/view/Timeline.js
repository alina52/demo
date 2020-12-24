import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import 'src/dashboard/index.css'

export default class Timeline extends Component {
    componentDidMount() {
        this.props.requestNewsForTimeline()
    }

    constructor(props) {
        super(props)
        // this.openNewsAnalysisDetailPopup = this.openNewsAnalysisDetailPopup.bind(this)
    }

    // openNewsAnalysisDetailPopup(newsId) {
    //     this.props.openNewsAnalysisDetailPopup(newsId)
    // }

    render() {
        const newsListSortedByTime = this.props.newsListSortedByTime || []

        return (
            <div className="news-timeline-content">
                <Timeline>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Eat</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Code</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>Sleep</TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        )
    }
}