import React, { Component } from 'react';
import GifImages from './GifImages.js'
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';



class SpeechToText extends Component {
  constructor() {
    super()
    this.state = {}
  }
  onListenClick() {
    console.log('This is working');
    fetch('http://localhost:3002/api/speech-to-text/token')
      .then(function(response) {
        console.log(['stillworking']);
          return response.text();
      }).then((token) => {
        var stream = recognizeMic({
            token: token,
            objectMode: true, // send objects instead of text
            extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
            format: false // optional - performs basic formatting on the results such as capitals an periods
        });
        stream.on('data', (data) => {
          this.setState({
            text: data.alternatives[0].transcript
          })
        });
        stream.on('error', function(err) {
            console.log(err);
        });
        document.querySelector('#stop').onclick = stream.stop.bind(stream);
      }).catch(function(error) {
          console.log(error);
      });
  }
  render() {
    return (
      <div className='test'>
        <div style={{fontSize: '30px'}}>{this.state.text}</div>
      <div className="SpeechToText">
        <div onClick={this.onListenClick.bind(this)}>Press to Start</div>
        </div>
        <GifImages phrase={this.state.text}/>
        </div>
    );
  }
}

export default SpeechToText;