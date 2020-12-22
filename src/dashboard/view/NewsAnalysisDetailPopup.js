import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import 'src/dashboard/index.css'

export default class NewsAnalysisDetailPopup extends Component {

    constructor(props) {
        super(props)
        this.handleClose = this.handleClose.bind(this)
    }

    handleClose() {
        this.props.closeNewsAnalysisDetailPopup()
    }

    render() {
        const selectedNewsAnalysisResult = this.props.selectedNewsAnalysisResult || []
        const isNewsAnalysisDetailPopupOpen = this.props.isNewsAnalysisDetailPopupOpen
        return (
            <Dialog className="selected-news-analysis-dialog" fullWidth maxWidth="lg" open={isNewsAnalysisDetailPopupOpen} >
                <DialogTitle className="selected-news-analysis-dialog">政治新闻分析结果</DialogTitle>
                <DialogContent>
                    <DialogContentText>我不知道写什么东西。建议就是描述一下下面的表格是啥东西。但是也可以不写。</DialogContentText>
                    {selectedNewsAnalysisResult && selectedNewsAnalysisResult.events && selectedNewsAnalysisResult.events.map(item => (
                        <TableContainer component={Paper}>
                        <Table className="selected-news-analysis-table" aria-label="simple table">
                            <TableBody>
                                <TableRow key='0'> <TableCell align="left">叙事框架</TableCell> <TableCell align="left">事件要素</TableCell> </TableRow>
                                <TableRow key='1'> <TableCell align="left">Source</TableCell> <TableCell align="left">{item.source && item.source.join(", ")}</TableCell> </TableRow>
                                <TableRow key='2'> <TableCell align="left">Target</TableCell> <TableCell align="left">{item.target}</TableCell> </TableRow>
                                <TableRow key='3'> <TableCell align="left">Trigger</TableCell> <TableCell align="left">{item.trigger}</TableCell> </TableRow>
                                <TableRow key='4'> <TableCell align="left">Type</TableCell> <TableCell align="left">{item.type}</TableCell> </TableRow>
                                <TableRow key='5'> <TableCell align="left">sentence</TableCell> <TableCell align="left" className="news-detail-sentence">{item.Sentence}</TableCell> </TableRow>
                                <TableRow key='6'> <TableCell align="left">时间</TableCell> <TableCell align="left">{selectedNewsAnalysisResult.time}</TableCell> </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    ))}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.handleClose()} color="primary"> Close </Button>
                </DialogActions>
            </Dialog>
        )
    }
}