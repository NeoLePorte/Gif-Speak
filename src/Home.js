import React from 'react';
import axios from 'axios';


class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        Person: ''
      };
    }
  
    componentDidMount() {
      axios.get("https://swapi.co/api/people/50/")
        .then(res =>  {
            this.setState({
              isLoaded: true,
              Person: res.data.name
            }) 
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, Person } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {

        return (
          <h1>
              Name: {Person}
          </h1>
        );
      }
    }
  }


  export default Home;