import React from 'react';
import Flat from './flat.jsx'

const FlatList = (props) => {
  const renderList = () => {
    return props.flats.map((flat, index) => {
      return (
        <Flat
        name={flat.name}
        price={flat.price}
        imageUrl={flat.imageUrl}/>
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
