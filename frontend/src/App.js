import { Route, BrowserRouter as Router } from "react-router-dom";
import { CssBaseline } from '@mui/material';
import Posts from './containers/Posts/Posts';
import NewPost from './containers/NewPost/NewPost';
import Post from './containers/Post/Post';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import './App.css';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <NavBar />
        <Route exact path="/" component={Posts} />
        <Route path="/posts/new" component={NewPost} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    </div>
  );
}

export default App;
