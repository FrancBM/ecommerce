import Panda from './Components/Panda';
import Gorilla from './Components/Gorilla';
import Rhino from './Components/Rhino';
import SeaTurtle from './Components/SeaTurtle';
import Home from './Components/Home';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path='/panda' component={Panda} />
        <Route path='/gorilla' component={Gorilla} />
        <Route path='/rhino' component={Rhino} />
        <Route path='/seaTurtle' component={SeaTurtle} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}
export default App;