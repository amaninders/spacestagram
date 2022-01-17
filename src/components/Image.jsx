import React from 'react'

function Image(props) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mt-3 mb-3">
      <div className="card text-center">
        <img src={props.src} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className='text-muted'>{props.date}</p>
          <p className="card-text overflow-auto">{props.description}</p>
          <div className="d-grid gap-2">
            <a href="#" className="btn btn-outline-dark"><i className="fas fa-heart"></i></a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Image
