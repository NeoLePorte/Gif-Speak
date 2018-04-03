import React from 'react';
import GphApiClient from 'giphy-js-sdk-core';
import Config from './Config.js';


class GifImages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        Gifs: {},
        phrase:''
      };
    }
    componentDidUpdate(prevProps) {
      if(prevProps.phrase !== this.state.phrase) {
        const client = GphApiClient(Config)
      client.translate('gifs', {"s": this.props.phrase})
        .then(res =>  {
            this.setState({
              isLoaded: true,
              Gifs: res.data,
              phrase: this.props.phrase
            })
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  }
    render() {
      const { error, isLoaded, Gifs } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div className='gif_wrapper'>
          {
            <img src={Gifs.images.downsized.gif_url} alt={Gifs.title} />
             
            }
          </div>
          
        );
      }
    }
  }
  export default GifImages;