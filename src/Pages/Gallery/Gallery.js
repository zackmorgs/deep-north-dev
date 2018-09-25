import React, { Component } from 'react';
import ImageList from './../../Data/image-list.json';

import { Link } from 'react-router-dom';

import Button, { ButtonText } from './../../Components/Button/Button';
import Page from './../../Components/Page/Page';
import CallToAction from './../../Components/CallToAction/CallToAction';

import './Gallery.css';

export class Gallery extends Component {
  constructor(props) {
    super(props);

    let getSelected = () => {
      let estimated = parseInt(
        document.location.pathname.replace('/gallery/', '')
      );

      let actual = estimated;
      if (
        document.location.pathname == '/gallery/' ||
        document.location.pathname === '/gallery'
      ) {
        actual = 0;
      }
      console.log('estimated:', estimated, actual);
      return actual;
    };

    this.state = {
      selectedImage: getSelected(),
      showAll: false
    };

    this.setState.selectedImage = getSelected();
  }
  handleShowAllClick = () => {
    this.setState({
      showAll: !this.state.showAll
    });
  };
  handleImageClick = Index => {};

  render() {
    let galleryLink = IndexNumber => `/gallery/${IndexNumber}/`;
    let MaxIndex = parseInt(this.state.selectedIndex) + 6;
    console.log('selectedIndex:', this.state.selectedIndex);
    let selectedImageStyles = {
      'background-image': 'url("/' + ImageList[this.state.selectedImage] + '")'
    };

    return (
      <Page
        pageTitle="Gallery"
        pageDescription="Some photos we've taken over the years documenting our feats and adventures."
      >
        <header>
          <h1>Gallery</h1>
        </header>
        <div className="spotlight">
          <a
            className="spotlight-image"
            href={galleryLink(parseInt(this.state.selectedImage + 1))}
            style={selectedImageStyles}
          />
          <small>Tap for the Next Image</small>
        </div>
        <div className="image-list-container">
          <ul className="image-list">
            {ImageList.map((Image, Index) => {
              Image = '/' + Image;
              if (
                ((Index === this.state.selectedImage) ||
                (Index > this.state.selectedImage + 5)) &&
                (this.state.showAll === false)
              ) {
                return null;
              } else {
                let backgroundImage = 'url("/' + ImageList[Index] + '")';
                return (
                  <li key={Index}>
                    <a
                      className="thumbnail"
                      href={`/gallery/${Index}`}
                      style={{
                        'background-image': backgroundImage
                      }}
                    />
                  </li>
                );
              }
            })}
          </ul>
          <CallToAction>
            <Button onClick={this.handleShowAllClick} kind="primary">
              <ButtonText>
                {this.state.showAll
                  ? `Show Less`
                  : `Show All (${ImageList.length})`}
              </ButtonText>
            </Button>
          </CallToAction>
        </div>
        {/* <Route path="/gallery/:Index" component={Gallery} /> */}
      </Page>
    );
  }
}

export default Gallery;
