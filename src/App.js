// import { Grid } from "antd";
import { Row } from "antd";
import { Provider } from "react-redux";
import { CreateStopWatch } from "./components/CreateStopWatch/CreateStopWatch";
import { store } from "./store";

function App() {
  return (
  <Provider store={store}>
    <Row align='middle' justify='center' style={{height: '100vh'}}>
        <CreateStopWatch/>
    </Row>
  </Provider>
  );
}

export default App;
