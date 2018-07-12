import React from 'react'
// import PropTypes from 'prop-types'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import * as apiActions from 'api-actions'
import { onMount } from 'lp-hoc'
import { selectors } from '../reducer'

const propTypes = {}

const defaultProps = {}

function Home ({movies}) {
  return (
    <div>
      <h1> Hello world! </h1>
      <p>
        This is the home view. You can change what's rendered here by editing the file: <b>src/js/main/home/views/Home.js</b>
      </p>
    </div>
  )
}

Home.propTypes = propTypes

Home.defaultProps = defaultProps

function mapStateToProps (state) {
  return {
    movies: selectors.movies(state)
  }
}

const mapDispatchToProps = {
  fetchAllMovies: apiActions.fetchAllMovies
}

function componentDidMount (props) {
   props.fetchAllMovies()
 }

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  onMount(componentDidMount)
)(Home)
