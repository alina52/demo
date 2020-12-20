import { connect } from 'react-redux'
import { clearHeaderTabPageData, initTabValue, updateTabValue } from 'src/core/actions'
import LayoutHeader from 'src/core/view/LayoutHeader'

const mapStateToProps = (state, ownProps) => {
    const nextProps = Object.assign({}, ownProps)
    Object.assign(nextProps, {
        tabValue : state.coreReducer.tabValue
    })
    return nextProps
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       

        changeHeaderPageTab : (tabValue) => {
            // dispatch(clearHeaderTabPageData())
            dispatch(updateTabValue(tabValue))
        },

        onPageLoaded : (tabValue) => {
            dispatch(initTabValue(tabValue))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutHeader);