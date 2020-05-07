import './preview-item.css';
import React from 'react';
import { Link } from 'react-router-dom';
import formateDatetime from '../../service/formate-datetime';

const PreviewItem = (props) => {
  const {id, img, likes, authorName, authorLink, created_at, handleLikeClick, isLiked} = props;
  const formatedDatetime = formateDatetime(created_at);

  return (
    <div className="preview-item">
      <div className="preview-item__picture">
        <Link to={`/jsdiploma/${props.id}`}>
          <img src={img} alt="picture" />
        </Link>
      </div>
      <div className="preview-item__props">
        <div className="preview-item__props_left">
          <input type="checkbox" id={id} checked={isLiked ? true : false}
                 onChange={() => handleLikeClick(id)}/>
          <label htmlFor={id}
                 className="preview-item__props_left_counter">
           {likes}
           </label>
        </div>
        <div className="preview-item__props_right">
          <a href={authorLink} target="_blank" className="preview-item__props_right_name">{authorName}</a>
          <time className="preview-item__props_right_date">{formatedDatetime}</time>
        </div>
      </div>
    </div>
  )
}

export default PreviewItem;
