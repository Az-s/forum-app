import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { CssBaseline } from '@mui/material';
import NavBar from './components/UI/NavBar/NavBar';
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
      <Switch>
        <Router>
          <NavBar />
          <Route exact path="/" component={Posts} />
          <Route path="/posts/new" component={NewPost} />
          <Route path="/post/:id" component={Post} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Router>
      </Switch>
    </div >
  );
}

export default App;
