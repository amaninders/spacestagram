import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import createGrid from '../helpers/createGrid'

function Grid(props) {

  return (
    <div className='container'>
      <ResponsiveMasonry columnsCountBreakPoints={{500: 1, 800: 2, 1200: 3}}>
        <Masonry>
          { createGrid(props.images) }
        </Masonry>
      </ResponsiveMasonry>        
    </div>
  )
}

export default Grid
