import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions/index';
import Dropzone from 'react-dropzone';
import { piexif } from 'piexifjs';

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
        var exif = piexif.load(evt.target.result);
        var image = new Image();
        image.onload = function (imageEvent) {
          var resizedImage;
          var orientation = exif["0th"][piexif.ImageIFD.Orientation];
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
          //var context = canvas.getContext('2d').drawImage(image, 0, 0, width, height);
          var ctx = canvas.getContext("2d");
          var x = 0;
          var y = 0;
          ctx.save();
          if (orientation == 2) {
              x = -canvas.width;
              ctx.scale(-1, 1);
          } else if (orientation == 3) {
              x = -canvas.width;
              y = -canvas.height;
              ctx.scale(-1, -1);
          } else if (orientation == 4) {
              y = -canvas.height;
              ctx.scale(1, -1);
          } else if (orientation == 5) {
              canvas.width = image.height;
              canvas.height = image.width;
              ctx.translate(canvas.width, canvas.height / canvas.width);
              ctx.rotate(Math.PI / 2);
              y = -canvas.width;
              ctx.scale(1, -1);
          } else if (orientation == 6) {
              canvas.width = image.height;
              canvas.height = image.width;
              ctx.translate(canvas.width, canvas.height / canvas.width);
              ctx.rotate(Math.PI / 2);
          } else if (orientation == 7) {
              canvas.width = image.height;
              canvas.height = image.width;
              ctx.translate(canvas.width, canvas.height / canvas.width);
              ctx.rotate(Math.PI / 2);
              x = -canvas.height;
              ctx.scale(-1, 1);
          } else if (orientation == 8) {
              canvas.width = image.height;
              canvas.height = image.width;
              ctx.translate(canvas.width, canvas.height / canvas.width);
              ctx.rotate(Math.PI / 2);
              x = -canvas.height;
              y = -canvas.width;
              ctx.scale(-1, -1);
          }
          ctx.drawImage(image, x, y);
          ctx.restore();
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
      <div className="configContainer">
        <div className="selfieContainer">
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
          <button className="a cancel" onClick={ this.removePicture }>Cancel</button>
        </div>
        </div>
        <div className = "usernameContainer">
          <div>
            <input onChange={(e) => this.nameChange(e)} id="enterUsername" type="text" placeholder="Enter Username Here" value={this.state.username}/>
          </div>
          <div>
            <button type="button" id="submitUsername" className="a" onClick={() => this.handleSubmit(this.state.username, this.state.dataURL)}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(null, {createUser})(userConfig);



