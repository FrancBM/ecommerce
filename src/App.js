import Panda from './components/Panda';
import Gorilla from './components/Gorilla';
import Rhino from './components/Rhino';
import SeaTurtle from './components/SeaTurtle';
import Navigation from './components/navbar/Navigation';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/panda' component={Panda} />
        <Route path='/gorilla' component={Gorilla} />
        <Route path='/rhino' component={Rhino} />
        <Route path='/seaTurtle' component={SeaTurtle} />
      </Routes>
    </div>
  );
}
export default App;