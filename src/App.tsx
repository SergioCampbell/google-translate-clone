import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStore } from "./hooks/useStore";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AUTO_LANGUAGE } from "./constants";
import { ArrowsIcon } from "./components/iconst";
import { LanguageSelector } from "./components/LanguageSelector";

function App() {
  const { fromLanguage, toLanguage, setFromLanguage, setToLanguage, interchangeLanguages } =
    useStore();
  return (
    <Container fluid>
      <h1>Google Translate Clone</h1>

      <Row>
        <Col>
          <LanguageSelector onChange={setFromLanguage}/>
        </Col>

        <Col sx="auto">
          <Button
            variant="link"
            disabled={fromLanguage === AUTO_LANGUAGE}
            onClick={interchangeLanguages}
          >
            <ArrowsIcon />
          </Button>
        </Col>

        <Col>
        <LanguageSelector onChange={setToLanguage}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
