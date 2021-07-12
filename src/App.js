import logo from './logo.svg';
import './App.css';

function getParams(url) {
  const paramSection = url.split('?')[1];
  if (paramSection) {
    const paramStrings = paramSection.split('&');
    const params = {};
    const paramTemp = [];
    paramStrings.forEach(element => {
      paramTemp.push(element.split('='));
    });
    paramTemp.forEach(element => {
      params[element[0]] = element[1];
    });
    return params;
  }
  return {};
}

function App() {
  console.log('HERE', getParams(window.location.href));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
