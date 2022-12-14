import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Footer />
        <GlobalStyle />
      </header>
    </div>
  );
}

export default App;
