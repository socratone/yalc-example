import drop from 'lodash/drop';

function App() {
  const array = [1, 2, 3];
  const droppedArray = drop(array, 1);

  return <div>{JSON.stringify(droppedArray, null, 2)}</div>;
}

export default App;
