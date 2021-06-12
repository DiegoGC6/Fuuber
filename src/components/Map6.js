import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Marker, GoogleApiWrapper } from 'google-maps-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap6 extends Component {
  static defaultProps = {
    center: {
      lat: 50.99073577622068,
      lng:  -114.04011545888807
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
            lat={50.99073577622068}
            lng={-114.04011545888807}
            text="Bennys Breakfast"          
          />
        </GoogleMapReact>
      </div>
      </>
    );
  }
}
 
export default SimpleMap6;