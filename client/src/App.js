
import './App.css';
import { Provider } from 'react-redux'
import store from './store/configureStore'
import Books from './components/Books';
import BookForm from './components/BookForm';
import UpdateForm from './components/UpdateForm';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'

function App() {
  
  return (
    <Provider store={store}>
        <div className="App">
           <Router>
            <Routes>
              <Route path="/" element={<Books/>}/>
              <Route path="/add" element={<BookForm/>}/>
              <Route path='/update/:id' element={<UpdateForm/>}/>
            </Routes>
           </Router>
        
        </div>
    </Provider>
  );
}

export default App;
