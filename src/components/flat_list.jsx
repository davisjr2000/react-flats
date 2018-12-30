import React from 'react';
import Flat from './flat.jsx'

const FlatList = (props) => {
  const renderList = () => {
    return props.flats.map((flat, index) => {
      return (
        <Flat
        name={flat.name}
        index={index}
        price={flat.price}
        selectFlat={props.selectFlat}
        imageUrl={flat.imageUrl}
        selected={flat.name === props.selectedFlat.name }/>
        );
    });
  };
    return(
        <div className="flat-list">
          {renderList()}
        </div>
      );
  };

export default FlatList;
