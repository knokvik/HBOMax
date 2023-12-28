import './App.css';
import Other from './components/subcards/cards';
import Content from './components/content';
import Navbar from './components/navbar';

function App() {
  return (
    <>
     <Navbar/>
     <Content/>
     <Other title={'Galaxy'}/>
     <Other title={'James'}/>
     <Other title={'Oggy'}/>
    </>
  );
}

export default App;
