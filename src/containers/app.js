import './index.css';
import React from 'react';
import {connect} from 'react-redux';
import { store } from '../index';
import {
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { setLike, unsetLike, fetchPhotos, loadMorePhotos } from '../actions';
import PreviewItemsContainer from '../components/preview-items-container/preview-items-container';
import FullscreenItem from '../components/fullscreen-item/fullscreen-item';
import getUnsplash from '../service/unsplash';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleLikeClick = this.handleLikeClick.bind(this);
  }

  componentDidMount() {
    location.search ?
      this.props.fetchPhotos()
      :
      this.auth()
  }

  auth() {
    const unsplash = getUnsplash();

    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
     "public",
     "write_likes"
    ]);

    location.assign(authenticationUrl);
  }

  handleLikeClick(id) {
    const {setLike, unsetLike} = this.props;
    const currentState = store.getState().photos;
    const targetElement = currentState.find(item => item.id === id );

    if (!targetElement.liked_by_user) {
      setLike(targetElement.id);
    } else {
      unsetLike(targetElement.id);
    }
  }

  render() {
    return (
      <Switch>

      <Route exact path="/jsdiploma/"
        render={ props => {
          return <PreviewItemsContainer
                  {...props}
                  posts={this.props.posts}
                  handleLikeClick={this.handleLikeClick}
                  loadMorePhotos={this.props.loadMorePhotos} />
        }}/>

        <Route
          path='/jsdiploma/:id'
          render={ props => {
            return  <FullscreenItem
                      {...props}
                      post={this.props.posts.find(item => item.id == props.match.params.id)}
                      handleLikeClick={this.handleLikeClick}/>
        }}/>

      </Switch>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.photos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setLike: id => dispatch(setLike(id)),
    unsetLike: id => dispatch(unsetLike(id)),
    fetchPhotos: () => dispatch(fetchPhotos()),
    loadMorePhotos: () => dispatch(loadMorePhotos())
  }
}

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
