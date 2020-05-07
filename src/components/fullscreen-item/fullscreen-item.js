import './fullscreen-item.css';
import React from 'react';
import { Link } from 'react-router-dom';
import formateDatetime from '../../service/formate-datetime';

const FullscreenItem = (props) => {

  if (props.post === undefined) {
    return null;
  }

  const {id, urls, likes, user, links, created_at, liked_by_user} = props.post;
  const formatedDatetime = formateDatetime(created_at);

  return (
    <div className="fullscreen-item">
      <div className="fullscreen-item__picture">
        <img src={urls.regular} alt="picture" />
      </div>
      <div className="fullscreen-item__props">
        <div className="fullscreen-item__props_left">
          <input type="checkbox" id={id} checked={liked_by_user ? true : false}
                 onChange={() => props.handleLikeClick(id)}/>
          <label htmlFor={id}
                 className="fullscreen-item__props_left_counter">
           {likes}
           </label>
        </div>
        <div className="fullscreen-item__props_right">
          <a href={links.html} target="_blank" className="fullscreen-item__props_right_name">{user.username}</a>
          <time className="fullscreen-item__props_right_date">{formatedDatetime}</time>
        </div>
      </div>
      <Link to="/jsdiploma/">
        <button className="fullscreen-item__closebtn"></button>
      </Link>
    </div>
  )
}

export default FullscreenItem;
