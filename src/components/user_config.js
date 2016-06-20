import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions/index';
import Dropzone from 'react-dropzone';

class userConfig extends Component {
  constructor (props) {
    super(props);
    this.state = {username: '',
                  file: [],
                  dataURL: ''};
    this.onDrop = this.onDrop.bind(this);
    this.removePicture = this.removePicture.bind(this);
  }

  removePicture() {
    this.setState({ file: [], dataURL: '' });
  }

  onDrop(file) {
    //make sure file is an image file in here
    console.log('file', file);
    var that = this;
    if (file[0].type.match(/image.*/)) {
      var reader = new FileReader();
      reader.onload = function(evt) {
        var dataURL = evt.target.result;
        var image = new Image();
        image.onload = function (imageEvent) {
          var resizedImage;
          // Resize the image
          var canvas = document.createElement('canvas'),
            max_size = 150,
            width = image.width,
            height = image.height;
          if (width > height) {
            if (width > max_size) {
              height *= max_size / width;
              width = max_size;
            }
          } else {
            if (height > max_size) {
              width *= max_size / height;
              height = max_size;
            }
          }
          canvas.width = width;
          canvas.height = height;
          var context = canvas.getContext('2d').drawImage(image, 0, 0, width, height);
          resizedImage = canvas.toDataURL('image/jpeg');
          that.setState({ file: file, dataURL: resizedImage });
        }
        image.src = dataURL;
      };
      reader.readAsDataURL(file[0]);
    }
  }

  nameChange(e) {
    this.setState({username: e.target.value});
  }

  handleSubmit(username, photo) {
    this.props.createUser(username, photo);
  }

  render() {
    const styleDropzone= {
      width: 200,
      height: 200,
      borderWith: 2,
      borderColor: '#666',
      borderStyle: 'dashed',
      borderRadius: 5,
      margin: 'auto'
    }

    const activeStyleDropzone= {
      width: 200,
      height: 200,
      borderWith: 2,
      borderColor: '#666',
      borderStyle: 'dashed',
      borderRadius: 5,
      margin: 'auto'
    }
    return (
      <div>
        <div>
        <div>
          {this.state.file.length > 0 ?
            <div className= 'centered-Create'>
              <img src={this.state.file[0].preview} height="200" />
            </div>
          :
            <div>
              <div>
              <Dropzone style= { styleDropzone } onDrop={this.onDrop} accept="image/*">
                <div className= 'text-center'>Snap a Selfie!</div>
              </Dropzone>
              </div>
            </div>
          }
        </div>
        <div className= 'centered-Create'>
          <button onClick={ this.removePicture }>Cancel</button>
        </div>
        </div>
        <div>
          <label>Username</label>
          <input onChange={(e) => this.nameChange(e)} type="text" placeholder="Enter Username Here" value={this.state.username}/>
          <button type="button" onClick={() => this.handleSubmit(this.state.username, this.state.dataURL)}>Submit</button>
        </div>
      </div>
    );
  }
}


export default connect(null, {createUser})(userConfig);



