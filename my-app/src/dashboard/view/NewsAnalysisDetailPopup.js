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
            <Dialog className="selected-news-analysis-dialog" maxWidth="md" open={isNewsAnalysisDetailPopupOpen} >
                <DialogTitle className="selected-news-analysis-dialog">事件详情</DialogTitle>
                <DialogContent>
                    <DialogContentText>&ensp;&ensp;&ensp;&ensp;{selectedNewsAnalysisResult.content}</DialogContentText>
                    {selectedNewsAnalysisResult && selectedNewsAnalysisResult.events && selectedNewsAnalysisResult.events.map(item => (
                        <TableContainer component={Paper}>
                        <Table className="selected-news-analysis-table" aria-label="simple table">
                            <TableBody>
                                <TableRow key='0'> <TableCell align="left" component="th" scope="row"><b>事件要素</b></TableCell> <TableCell align="left"><b>内容</b></TableCell> </TableRow>
                                <TableRow key='1'> <TableCell align="left" component="th" scope="row">主体</TableCell> <TableCell align="left">{item.source && item.source.join(", ")}</TableCell> </TableRow>
                                <TableRow key='2'> <TableCell align="left" component="th" scope="row">客体</TableCell> <TableCell align="left">{item.target}</TableCell> </TableRow>
                                <TableRow key='3'> <TableCell align="left" component="th" scope="row">触发词</TableCell> <TableCell align="left">{item.trigger}</TableCell> </TableRow>
                                <TableRow key='4'> <TableCell align="left" component="th" scope="row">事件类型</TableCell> <TableCell align="left">{item.type}</TableCell> </TableRow>
                                <TableRow key='5'> <TableCell align="left" component="th" scope="row">事件句</TableCell> <TableCell align="left" className="news-detail-sentence">{item.sentence}</TableCell> </TableRow>
                                <TableRow key='6'> <TableCell align="left" component="th" scope="row">时间</TableCell> <TableCell align="left">{selectedNewsAnalysisResult.time}</TableCell> </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    ))}
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.handleClose()} color="default" variant="outlined" size="small"> 关闭 </Button>
                </DialogActions>
            </Dialog>
        )
    }
}