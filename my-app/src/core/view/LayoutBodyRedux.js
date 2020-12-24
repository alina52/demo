import { connect } from 'react-redux'
import LayoutBody from 'src/core/view/LayoutBody'

const mapStateToProps = (state, ownProps) => {
    const nextProps = Object.assign({}, ownProps)
    Object.assign(nextProps, {
        tabValue : state.coreReducer.tabValue
    })
    return nextProps
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutBody);