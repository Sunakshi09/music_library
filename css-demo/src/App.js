import Button from "react-bootstrap/Button";

function App() {
  //const [isActive, setIsActive] = useState(true)
  const cats = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const display = cats.map((cat) => {
    return (
      <Col xs={12} sm={6} md={4} lg={3}>
        <ApplicationCard image={catPic} />
      </Col>
    );
  });
  return (
    <div>
      <ApplicationNavbar />
      <h2>Hello</h2>
      <Button size="lg" variant="danger">
        Click me
      </Button>
      <Button size="sm" variant="danger">
        Click me
      </Button>

      <Container>
        <Row></Row>
      </Container>
    </div>
  );
}

export default App;
