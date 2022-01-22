import Container from "react-bootstrap/Container"
import { Stack, Button } from "react-bootstrap"
import Item from "./components/item-component"
import "./App.css"

function App() {
  return (
    <Container className="my-4">
      <h1 className="me-auto">Budget App</h1>
      <Stack direction="horizontal" gap="2" className="mb-4">
          <Button variant="primary"> Modify Budget </Button>
          <Button variant="outline-primary"> Add Category </Button>
      </Stack>
      <div id="grid">
        <Item name="Expense 1" amount={0} maxAmount={500}></Item>
      </div>
    </Container>
    )
}

export default App
