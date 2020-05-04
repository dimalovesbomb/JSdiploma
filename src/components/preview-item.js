import React from 'react';
import { Link } from 'react-router-dom';
import formateDatetime from '../service/formate-datetime';

const PreviewItem = (props) => {
  const {id, img, likes, authorName, authorLink, created_at, handleLikeClick, isLiked} = props;
  const formatedDatetime = formateDatetime(created_at);

  return (
    <div className="preview__item">
      <div className="preview__item__picture">
        <Link to={`/jsdiploma/${props.id}`}>
          <img src={img} alt="picture" />
        </Link>
      </div>
      <div className="preview__item__props">
        <div className="preview__item__props__left">
          <input type="checkbox" id={id} checked={isLiked ? true : false}
                 onChange={() => handleLikeClick(id)}/>
          <label htmlFor={id}
                 className="preview__item__props__left__counter">
           {likes}
           </label>
        </div>
        <div className="preview__item__props__right">
          <a href={authorLink} target="_blank" className="preview__item__props__right__name">{authorName}</a>
          <time className="preview__item__props__right__date">{formatedDatetime}</time>
        </div>
      </div>
    </div>
  )
}

export default PreviewItem;
