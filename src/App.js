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
    adjustedPercent =  percentage / 100;// (percentage / 125) + 0.1;
  }
  // const arcSplit = [0.1, adjustedPercent, 0.9 - adjustedPercent, 0.1];
  // let colorCode = '#72CE8D';
  // if (adjustedPercent < 0.85) {
  //   colorCode = '#ffef62';
  // }
  // if (adjustedPercent < 0.6) {
  //   colorCode = '#f0ad4e';
  // }
  // if (adjustedPercent < 0.35) {
  //   colorCode = '#d9534f';
  // }

  return (
    <div className="App">
      <GaugeChart id="gauge-chart3"
        colors={['#d9534f', '#f0ad4e', '#ffef62', '#72CE8D', ]}
        arcsLength={[0.25, 0.25, 0.25, 0.25]}
        arcPadding={0}
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
