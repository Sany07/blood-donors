import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div className="container">
  <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <img className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none" src="https://script.viserlab.com/bloodlab/assets/images/logoIcon/logo.png" alt="logo"></img>
    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
      <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
      <li><a href="#" className="nav-link px-2 link-dark">Donors</a></li>
      <li><a href="#" className="nav-link px-2 link-dark">Blog</a></li>
      <li><a href="#" className="nav-link px-2 link-dark">Contact</a></li>
    </ul>
    <div className="col-md-3 text-end">
      <button type="button" className="btn btn-outline-primary me-2">Login</button>
      <button type="button" className="btn btn-danger"> Apply as a Donor</button>
    </div>
  </header>
</div>


  );
}

export default App;
