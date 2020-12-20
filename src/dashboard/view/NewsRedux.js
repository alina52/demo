import { connect } from 'react-redux'
import { fetchAllNews } from 'src/dashboard/actions'
import News from 'src/dashboard/view/News'

const mapStateToProps = (state, ownProps) => {
    const nextProps = Object.assign({}, ownProps)
    Object.assign(nextProps, {
        newsList : state.dashboardReducer.newsList
    })
    return nextProps
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       
        requestNews : () => {
            dispatch(fetchAllNews())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);