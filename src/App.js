import './App.css';
import GaugeChart from 'react-gauge-chart'

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
  const percentage = getParams(window.location.href).percent;
  let adjustedPercent = 0;
  if (percentage) {
    adjustedPercent = (percentage / 125) + 0.1;
  }

  return (
    <div className="App">
      <GaugeChart id="gauge-chart3"
        colors={['#fff', '#72CE8D', '#fff']}
        arcsLength={[0.1, 0.8, 0.1]}
        needleColor='#000'
        needleBaseColor='#000'
        arcWidth={0.5}
        percent={adjustedPercent}
        hideText
      />
    </div>
  );
}

export default App;
