import './App.scss';
function App() {

  function scaleBg(action) {
    let eLogin = document.querySelector('.App')
    if (action) {
      eLogin.style.transform = "scale(1.2)"
      eLogin.style.transition = '1s'
    }
    else {
      eLogin.style.transform = "scale(1.0)"
    }
  }
  return (
    <div className="App">

      <div className="login" onMouseEnter={() => scaleBg('enter')}
        onMouseLeave={() => scaleBg()}>
        <input type="email" />
        <input type="password" />
        <button>Login</button>
      </div>
    </div>
  );
}

export default App;
