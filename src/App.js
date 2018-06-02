import React, { Component } from 'react'
import {
  Container,
  Grid,
  Column,
  Header,
  Card, Icon, Image
} from 'semantic-ui-react'

import { getImageUrl, getMovieInfo } from '../src/api'

//const API_KEY = `cfe422613b250f702980a3bbf9e90716`
//const API_URL = `https://api.themoviedb.org/3/movie/popular?&api_key=${API_KEY}`

const style = {
  fluid: {
    padding: '1em',
  },
  header: {
    margin: '1em 0em ',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      moviesInfo: []
    }

  }

  componentDidMount() {
    getMovieInfo().then((data) => {
      this.setState({
        moviesInfo: data.results
      })
    })
  }

  render() {
    return (
      <div style={style.fluid}>
        <h2 as='h2' style={style.header}>The Popular Movie Bank</h2>
        <p>Popular Movies</p>
        <div>

          {
            this.state.moviesInfo.map((movie, i) => {
              return (
                <div key={i}>
                  <div>
                    <img src={getImageUrl(movie.poster_path)} alt={movie.title} />
                    <div>
                      <h3>
                        {movie.title}
                      </h3>
                      <h4>
                        <span className='date'>
                        {movie.release_date}
                        </span>
                      </h4>
                      <p>
                        {movie.vote_average}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    )
  }
}