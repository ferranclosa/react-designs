import SplitScreen from './SplitScreen'
import TopComponent from "./TopComponent";
import BottomComponent from "./BottomComponent";

function App() {
  return (
    <SplitScreen
      leftWeight={2}
      rightWeight={4}>
      <TopComponent title={'Top part of the page'} />
      <BottomComponent content={'Some content in the paragraph'}/>
  </SplitScreen>
  );
}

export default App;
