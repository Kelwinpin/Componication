import * as stylex from "@stylexjs/stylex";
import { TextField } from "./components/TextField";


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
    <TextField placeholder="Senha" />
  </div>
  )
}

export default App
