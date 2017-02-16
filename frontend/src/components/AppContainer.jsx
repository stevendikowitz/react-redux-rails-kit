import { connect } from 'react-redux'
import App from './App'

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
  })
}

const mapDispatchToProps = (dispatch, ownProps) => {
  if (process.env.NODE_ENV && typeof window === 'object') {
    window.ScbDispatch = dispatch
  }

  return {
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer