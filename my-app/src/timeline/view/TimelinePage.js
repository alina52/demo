import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Typography from '@material-ui/core/Typography';
import 'src/timeline/index.css'

export default class TimelinePage extends Component {
    componentDidMount() {
        this.props.requestNewsForTimeline()
    }

    constructor(props) {
        super(props)
        this.openNewsAnalysisDetailPopup = this.openNewsAnalysisDetailPopup.bind(this)
    }

    openNewsAnalysisDetailPopup(newsId) {
        this.props.openNewsAnalysisDetailPopup(newsId)
    }

    render() {
        const newListForTimeline = this.props.newListForTimeline || []

        return (
            <div className="news-timeline-content">
                <Timeline>
                    {newListForTimeline.map(item => (
                        <TimelineItem>
                            <TimelineOppositeContent align="left">
                                <Typography color="textSecondary">{item.time}</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                            {item.events.map(event => (
                                <Card className="news-timeline-item-event">
                                <CardContent>
                                    <Typography variant="h6" display="block"> {event.title}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant="outlined" size="small" color="default" className="news-analysis" onClick={() => this.openNewsAnalysisDetailPopup(event.id)}> 事件详情 </Button>
                                </CardActions>
                            </Card>
                            ))}
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        )
    }
}