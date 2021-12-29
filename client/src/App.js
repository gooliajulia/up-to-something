import { Route } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import Projects from './screens/Projects';
import WhoIAm from './screens/WhoIAm';
import Contact from './screens/Contact';

function App() {
  return (
    <div className="App">
      <Layout >
        <Route path='/projects' >
          <Projects />
        </Route>
        <Route path='/about-me'>
          <WhoIAm />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
      </Layout>
    </div>
  );
}

export default App;
