import React, { useState } from 'react'
import humanDate from '../helpers/humanDate'
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function Image(props) {

  const notify = (message) => {
    toast(message)
  };

  const [cls, setCls] = useState("btn btn-dark")
  const [likeText, setLikeText] = useState("like")

  return (
    <div className="p-3">
      <div className="card text-center" style={{'backgroundColor':'#DAE8F7'}}>
        <img className="card-img-top p-2 pb-0" src={props.src} alt="..." />
        <div className="card-body p-0">
          <div className="d-flex justify-content-between align-items-stretch border border-dark mb-3 ms-2 me-2">
            <div className='d-flex align-items-center bg-light p-3 m-0 w-75'>
              <h5 className="card-title m-0 text-break">{props.title}</h5>
            </div>
            <div className="d-flex align-items-center bg-secondary p-2 m-0">
              <h5 className="text-light text-uppercase custom-date">{ humanDate(props.date)}</h5>
            </div>
          </div>
          <p className="card-text overflow-auto pt-1 ps-3 pe-3" style={{ 'textAlign': 'justify',
  'textJustify': 'inter-word'}}>{props.description}</p>
          <div className="d-grid gap-2 p-2">
            <button className={cls} onClick={() => { if(likeText === "like") notify('Liked 👍') ; setCls((cls) => (cls === "btn btn-dark" ? "btn btn-danger" : "btn btn-dark")) ; setLikeText((likeText) => (likeText === "unlike" ? "like" : "unlike"))}}><i className="fas fa-heart"></i> {likeText}</button>
            <button className="btn btn-dark" onClick={ () => { notify('link copied 📋'); copy(props.src);} }><i class="far fa-copy"></i> copy url</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Image
