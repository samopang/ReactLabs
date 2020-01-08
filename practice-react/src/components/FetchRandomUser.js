import React from 'react'

export default class FetchRandomUser extends React.Component {

  state = {
    people: [], // hold multiple users
    loading: true
  }
  async componentDidMount() {
    const url = 'https://api.randomuser.me/?results=5'
    const response = await fetch(url)
    const data = await response.json()
    this.setState({
      people: data.results,
      loading: false
    })
    // console.log(data) // for testing
  }
  render() {
    if (this.state.loading) {
      return <div>loading..</div>
    }
    if (!this.state.people) {
      return <div>Did not get any person..</div>
    }

    // forEach()
    /*
    const users = []
    this.state.people.forEach((data) => (
      users.push(
        <div key={data.login.uuid}>
          Title: {data.title} 
          Name: {data.name.first} {data.name.last} <br />
          Email: {data.email}<br />
          <img src={data.picture.large} alt="user profile" />
        </div>
      )
    ))
    */

    // map()
    /*
    const users = this.state.people.map((person, i) => (
      // Each child in a list should have a unique "key" prop.
      // in this case, using 'person.login.uuid' (use data-represent is better)
      // generally pass index 'i' as a key (not good to use in the most of the time, get error when we delete a item)
      <div key={`user-${i}`}>
        Title: {person.title} 
        Name: {person.name.first} {person.name.last} <br />
        Email: {person.email}<br />
        <img src={person.picture.large} alt="user profile" />
      </div>
    ))
    */
    return (
      <div>
        { // directly map()
          this.state.people.map(data => (
              <div key={data.login.uuid}>
                Title: {data.title} 
                Name: {data.name.first} {data.name.last} <br />
                Email: {data.email}<br />
                <img src={data.picture.large} alt="user profile" />
              </div>
          ))
        }
      </div>
    )
  }
}
