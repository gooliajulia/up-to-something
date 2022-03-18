import { Route } from 'react-router-dom';
import './App.css';
import Layout from './layouts/Layout';
import Projects from './screens/Projects';
import WhoIAm from './screens/WhoIAm';
import Contact from './screens/Contact';
import Landing from './screens/Landing';

function App() {
  return (
    <div className="App">
      {/* <Route path='/landing' exact>
          <Landing />
      </Route> */}
      <Layout >
        <Route path='/' exact >
          <Landing />
        </Route>
        <Route path='/projects' >
          <Projects />
        </Route>
        <Route path='/about-me' exact >
          <WhoIAm />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        {/* <Route path='/brand-statement'>
          <p>Julia Dwyer Personal Brand Statement:
          “A thoughtful creative who is passionate about problem solving. As a developer I’m eager to learn and always looking for a new challenge. With a combined background in engineering and the arts, I’m passionate about combining the two to create intuitive, enjoyable and optimized experiences and products. I value working positively on a team and am excited to see what the future holds.”</p>
        </Route> */}
      </Layout>
    </div>
  );
}

export default App;
