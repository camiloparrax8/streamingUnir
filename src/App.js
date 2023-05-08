import './styles/App.css';
import { Header } from './components/Header';
import { StreamingRouter } from './router/StreamingRouter';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
    <Header></Header>
    <StreamingRouter></StreamingRouter>
    <Footer></Footer>
    
    </>
    

  );
}

export default App;
