
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import Test from './components/Test';
import { Provider } from 'react-redux'
import store from './store/store'
function App() {
  return (
    <Provider store={store}>
      <div
        className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
      >
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Navbar />
          <Header />

          <hr className="mt-4" />


          <TodoList />

          <hr className="mt-4" />

          <Footer />

        </div>
        {/* <Test /> */}
      </div>
    </Provider>
  );
}

export default App;
