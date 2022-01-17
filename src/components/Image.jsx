import React from 'react'

function Image() {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mt-3 mb-3">
      <div className="card text-center">
        <img src="https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Image title</h5>
          <p className='text-muted'>date taken</p>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="d-grid gap-2">
            <a href="#" className="btn btn-outline-dark"><i className="fas fa-heart"></i></a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Image
