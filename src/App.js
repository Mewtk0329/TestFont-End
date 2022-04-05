import './App.css';
import Homepage from './Components/Homepage';
import DetailPage from './Components/DetailPage';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App" >

    <Switch>
    <Route exact path="/">
      
        <Homepage/>
      
    </Route>

    <Route path="/Detail">

      <DetailPage/>
      
    </Route>
    </Switch>
    </div>
  );
}

export default App;
