import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'src/dashboard/index.css'

class TableRow extends Component {
    render() {
        const item = this.props.item
        return (
            <li className='infinte-row table-content' id={item.id}>
                <Card className="news-contract">
                    <CardContent>
                        <Typography variant="h5" component="h2"  display="inline"> {item.title}</Typography>
                        <Typography variant="overline" display="inline" align="right" className="time"> {item.time}</Typography>
                        <p className="news-list-news">&ensp;&ensp;&ensp;&ensp;{item.content}</p>
                    </CardContent>
                    <CardActions className="button">
                        <Button variant="outlined" size="small" color="default" className="news-analysis" onClick={() => this.props.onClickAnalyzeNews(item.id)}> 事件详情 </Button>
                    </CardActions>
                </Card>
            </li>
        )
    }
}

export default class News extends Component {
    componentDidMount() {
        this.props.requestNews()
    }

    constructor(props) {
        super(props)
        this.openNewsAnalysisDetailPopup = this.openNewsAnalysisDetailPopup.bind(this)
    }

    openNewsAnalysisDetailPopup(newsId) {
        this.props.openNewsAnalysisDetailPopup(newsId)
    }

    render() {
        const newsList = this.props.newsList || []

        return (
            <div className="news-list-content">
                <div className="new-list-table">
                    <ul className="infinte-list">
                        {newsList.map(item => (
                            <TableRow key={item.id} item={item} onClickAnalyzeNews={this.openNewsAnalysisDetailPopup}/>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}