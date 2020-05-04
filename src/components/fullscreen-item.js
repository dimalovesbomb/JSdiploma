import React from 'react';
import { Link } from 'react-router-dom';
import formateDatetime from '../service/formate-datetime';

const FullscreenItem = (props) => {

  if (props.post === undefined) {
    return null;
  }

  const {id, urls, likes, user, links, created_at, liked_by_user} = props.post;
  const formatedDatetime = formateDatetime(created_at);

  return (
    <div className="fullscreen__item">
      <div className="fullscreen__item__picture">
        <img src={urls.regular} alt="picture" />
      </div>
      <div className="fullscreen__item__props">
        <div className="fullscreen__item__props__left">
          <input type="checkbox" id={id} checked={liked_by_user ? true : false}
                 onChange={() => props.handleLikeClick(id)}/>
          <label htmlFor={id}
                 className="fullscreen__item__props__left__counter">
           {likes}
           </label>
        </div>
        <div className="fullscreen__item__props__right">
          <a href={links.html} target="_blank" className="fullscreen__item__props__right__name">{user.username}</a>
          <time className="fullscreen__item__props__right__date">{formatedDatetime}</time>
        </div>
      </div>
      <Link to="/jsdiploma/">
        <button className="fullscreen__item__closebtn"></button>
      </Link>
    </div>
  )
}

export default FullscreenItem;
