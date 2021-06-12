import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Marker, GoogleApiWrapper } from 'google-maps-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap2 extends Component {
  static defaultProps = {
    center: {
      lat: 51.096812332554826,
      lng:  -114.03409704992106
    },
    zoom: 17
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <>
      <div style={{ height: '50vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAalXZfeG0WpdCBIxyXIr5Vb-acK9LpQV0' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={51.096812332554826}
            lng={-114.03409704992106}
            text="Timmies"
          />
        </GoogleMapReact>
      </div>
      </>
    );
  }
}
 
export default SimpleMap2;