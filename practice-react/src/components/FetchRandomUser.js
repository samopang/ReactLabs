import React from 'react'

export default class FetchRandomUser extends React.Component {

  state = {
    person: null,
    loading: true
  }
  async componentDidMount() {
    const url = 'https://api.randomuser.me/'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({
      person: data.results[0],
      loading: false
    })
    // console.log(data) // for testing
  }
  render() {
    return (
      <div>
        {
          this.state.loading || !this.state.person ? (
              <div>loading..</div> 
            ) : (
              <div>
                Name: {this.state.person.name.first} {this.state.person.name.last} <br />
                Email: {this.state.person.email}
              </div>
            )
        }
      </div>
    )
  }
}
