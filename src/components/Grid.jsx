import React from 'react'
import Image from './Image'

function Grid(props) {

  const images = props.images.map((image, index) => {
    if (image.links) {
      return (<Image 
        key={index}
        description={image.data[0].description}
        title={image.data[0].title}
        date={image.data[0].date_created}
        src={(image.links[0].href)} />);
    }
  });

  return (
    <div className="container d-flex flex-column">
        <div className="row">
            {images}
        </div>
    </div>
  )
}

export default Grid
