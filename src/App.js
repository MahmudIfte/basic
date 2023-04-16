
import Navbar from './Navbar';
import Home from './Home';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {

const title = 'Welcome to the new blog';
var likes = 50;
const link='<http://www.google.com';
  return (

    <Router>

    <div className="App">

    <Navbar/>  

    <div className="content">
    <Switch>
      <Route exact path="/">
        <Home/>

      </Route>
      <Route path="/create">
        <Create></Create>

      </Route>
      <Route path="/blogs/:id">
     <BlogDetails/>

      </Route>


      
      <Route path="*">
        <NotFound/>
      </Route>
    </Switch>
      <h1>{ title }</h1>
      <p>Liked {likes}</p>
      <p>Liked {10}</p>
      <p>Liked {"HELLO"}</p>
      <p>Liked {[1,2,3,4,5]}</p>
      <p>Liked {Math.random()*10}</p>
      <a href={link}>GOOGLE</a>
    </div>
    </div>
    </Router>
  );
}

export default App;
