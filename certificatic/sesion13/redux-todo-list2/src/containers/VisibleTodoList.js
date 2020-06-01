import {connect} from 'react-redux'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos,filter)=>{
    switch(filter){
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return
    }
}

const mapStateToProps = state =>()

const mapDispatchToProps = dispatch =>()

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)