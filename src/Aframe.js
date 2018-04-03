import React from 'react';
import aframe from 'aframe';
import 'aframe-state-component';
import 'aframe-gif-shader';


class Aframe extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        src : ''
      };
    }
    componentDidUpdate(prevProps) {
        if(prevProps.src !== this.state.src) {
              this.setState({
                src : this.props.src
              })
            }
            (error) => {
              this.setState({
                error
              });
            }
        }
    render() {
        const {error, src} = this.state;
        if(error) {
            return <div>Error: {error.message}</div>;   
        }
        return(
            <div className='aframe_wrapper'>
            <a-scene embedded>
            <a-box  material="shader:gif;src:src" position="-1 0.5 -3" rotation="0 45 0"></a-box>
            <a-sphere  src={src} position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
            <a-cylinder  material="shader:gif;src:src" position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
            <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
            {/* <a-sky color="#ECECEC"></a-sky> */}
            </a-scene>
            </div>
          );
        
    }
  }
  export default Aframe;