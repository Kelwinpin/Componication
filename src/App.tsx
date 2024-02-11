import * as stylex from "@stylexjs/stylex";
import { Button } from "./components/Button";
import { TextField } from "./components/TextField";
import { Checkbox } from "./components/Checkbox";
import { Radio } from "./components/Radio";

const styles = stylex.create({
  container:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignContent:"center"
  }
})

function App() {
  return (
  <div {...stylex.props(styles.container)}>
    <Button>Submit</Button>
    <TextField type="password" placeholder="Senha"/>
    <Checkbox/>
    <Radio value="1" label="Opção 1"/>
  </div>
  )
}

export default App
