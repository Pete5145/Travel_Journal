import Header from './components/Header';
import Travel from './components/Travel';
import data from './data';

function App() {
  const travel = data.map(item => {
    return <Travel key={item.id} item={item}/>;
  })
  return (
    <div className="App">
        <Header />
        <main>
          {travel}
        </main>
    </div>
  );
}

export default App;
