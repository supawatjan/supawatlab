import './App.css';
import { Cart } from './components/cartComponent';
import { Header } from './components/header';
import DataProvider  from './management/dataContext';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Header/>
        <main>
          <Cart/>
        </main>
      </div>
    </DataProvider>
  );
}

export default App;
