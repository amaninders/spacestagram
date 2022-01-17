import React, { useState } from 'react'
import humanDate from '../helpers/humanDate'
import copy from 'copy-to-clipboard';
import randomColor from 'randomcolor';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


function Image(props) {

  const notify = (message) => {
    toast(message)
  };

  const [cls, setCls] = useState("btn btn-success")
  const [likeText, setLikeText] = useState("like")

  return (
    <div className="p-3">
      <div className="card text-center">
        <img src={props.src} className="card-img-top" alt="..." />
        <div className="card-body" style={{'backgroundColor':randomColor({luminosity: 'light', hue: 'yellow', alpha: 0.1})}}>
          <h5 className="card-title">{props.title}</h5>
          <p>{ humanDate(props.date)}</p>
          <p className="card-text overflow-auto">{props.description}</p>
          <div className="d-grid gap-2">
            <button className={cls} onClick={() => { if(likeText === "like") notify('Liked 👍') ; setCls((cls) => (cls === "btn btn-success" ? "btn btn-danger" : "btn btn-success")) ; setLikeText((likeText) => (likeText === "unlike" ? "like" : "unlike"))}}><i className="fas fa-heart"></i> {likeText}</button>
            <button className="btn btn-dark" onClick={ () => { notify('link copied 📋'); copy(props.src);} }><i class="far fa-copy"></i> copy url</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Image
