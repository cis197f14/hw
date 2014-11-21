var Comments = React.createClass({
  render: function() {
    var commentNodes = this.props.comments.map(function(comment) {
      return (
        <li className='comment'>
          <p className='commentContent'>{comment.body}</p>
          <small className='author'>-{comment.user.name} ({comment.user.username})</small>
        </li>
      );
    });
    return (
      <ul className='comments'>
        {commentNodes}
      </ul>
    );
  }
});

var Post = React.createClass({
  render: function() {
    return (
      <li className='post' /* TODO: add click handler to each <li> */ >
        <div className='voteCount'>{this.props.post.votes_count} points</div>
        <div className='postContent'>
          {this.props.post.name} <small>{this.props.post.tagline}</small>
        </div>
      </li>
    );
  }
});

var App = React.createClass({
  getInitialState: function() {
    // TODO: return the initial state
    // This should set all the variables you want to keep track of
    return null;
  },
  componentDidMount: function() {
    // TODO: Load the post data from http://ph-api.herokuapp.com/posts once the component loads
  },
  render: function() {
    return (
      <div className='ph'>
        <h1 className='header'>Product Hunt Client</h1>
        <ul className='posts'>
        // TODO: add the array of Post components here
        </ul>
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('content')
);
