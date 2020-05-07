import './preview-items-container.css';
import React from 'react';
import PreviewItem from '../preview-item/preview-item';
import { Route } from 'react-router-dom';

const PreviewItemsContainer = (props) => {

  return (
    <main>
      {
        props.posts.map(item => {
          return (
            <PreviewItem
                  {...props}
                  key={item.id}
                  id={item.id}
                  handleLikeClick={props.handleLikeClick}
                  isLiked={item.liked_by_user}
                  img={item.urls.small}
                  likes={item.likes}
                  authorName={item.user.username}
                  authorLink={item.links.html}
                  created_at={item.created_at}
                />
          );
        })
      }
      <button
        onClick={() => props.loadMorePhotos()}
        className="load-more__button">
        Load more
      </button>
    </main>
  )
}

export default PreviewItemsContainer;
