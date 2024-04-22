
import './App.css';
import { Provider } from 'react-redux'
import store from './store/configureStore'
import Books from './components/Books';
function App() {
  return (
    <Provider store={store}>

        <div className="App">
        <Books/>
        </div>
    </Provider>
  );
}

export default App;
