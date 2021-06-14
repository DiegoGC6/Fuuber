import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Marker, GoogleApiWrapper } from 'google-maps-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 51.04913247006971,
      lng: -114.06255801705251,
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <>
      <div style={{ height: '50vh', width: '60%' }}>
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
          <AnyReactComponent
            lat={51.06659875109058}
            lng={-114.05796632649005}
            text="Peter's Drive-in"
          />
          <AnyReactComponent
            lat={51.05220718134113}
            lng={-114.07800916990597}
            text="Hutch Cafe"            
          />
          <AnyReactComponent
            lat={51.03942795022586}
            lng={-114.09535195880478}
            text="Tokyo Station"             
          />
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
 
export default SimpleMap;