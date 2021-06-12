import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Marker, GoogleApiWrapper } from 'google-maps-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap4 extends Component {
  static defaultProps = {
    center: {
      lat: 51.05220718134113,
      lng:  -114.07800916990597
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
            lat={51.05220718134113}
            lng={-114.07800916990597}
            text="Hutch Cafe"            
          />
        </GoogleMapReact>
      </div>
      </>
    );
  }
}
 
export default SimpleMap4;