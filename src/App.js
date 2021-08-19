import './style.css';

import Header from './layout/Header';
import Footer from './layout/Footer';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
