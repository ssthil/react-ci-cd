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
    console.log(this.state.moviesInfo)
    return (
      <Container fluid style={style.fluid}>
        <Header as='h2' style={style.header}>The Popular Movie Bank</Header>
        <p>Popular Movies</p>
        <Grid relaxed='very' columns={5}>

          {
            this.state.moviesInfo.map((movie, i) => {
              return (
                <Grid.Column key={i}>
                  <Card>
                    <Image src={getImageUrl(movie.poster_path)} alt={movie.title} />
                    <Card.Content>
                      <Card.Header>
                        {movie.title}
                      </Card.Header>
                      <Card.Meta>
                        <span className='date'>
                        {movie.release_date}
                        </span>
                      </Card.Meta>
                      <Card.Description>
                        {movie.vote_average}
                      </Card.Description>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              )
            })
          }

        </Grid>
      </Container>
    )
  }
}