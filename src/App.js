// import { Grid } from "antd";
import { connect } from "react-redux";
import { CreateStopWatch } from "./components/CreateStopWatch/CreateStopWatch";
import { StopWatch } from "./components/StopWatch/StopWatch";

const mapStateToProps = (state) => {
  return {
    stopwatchs: state.stopwatch.stopwatchs
}
}

const App= connect(mapStateToProps)(({stopwatchs}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <CreateStopWatch/>
        {stopwatchs.map((el)=> <StopWatch key={el.startDate} stopwatch={el}/>)}
    </div>
  );
})

export default App;
