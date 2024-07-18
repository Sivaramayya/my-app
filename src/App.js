import 'bootstrap/dist/css/bootstrap.css';
import ListGroup from "./ListGroup";
import ListGroupProps from "./ListGroupProps";

function App() {
  let teachers=['siva','vamsi','navya','divya','shan']
  return (
      <ListGroupProps items={teachers} heading="LIst of Teachers"/>
  )
}

export default App;
