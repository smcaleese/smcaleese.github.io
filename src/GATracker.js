import React, {useEffect} from 'react'
import ReactGA from 'react-ga'
import {withRouter} from 'react-router-dom'

const GATracker = ({history}) => {
  useEffect(() => {
    ReactGA.initialize("G-MP2K93C8VN")
  }, [])

  history.listen((location, action) => {
    ReactGA.set({page: location.pathname})
    ReactGA.pageview(location.pathname)
  })

  return null
}

export default withRouter(GATracker)
