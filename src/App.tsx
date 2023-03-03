import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript edited by Priya
                Salako
            </header>
            <p>
                Hello World Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>
            <h1>Welcome to the website!</h1>
            <img src={require("./sunshine.jpg")} alt="Oops" />
            <p>Here are some things you should know:</p>
            <ul>
                <li>This my first ever website. Excitinggg!</li>
                <li>I am a sophomore CS major and Math minor.</li>
                <li>
                    My favorite color is{" "}
                    <span style={{ color: "purple" }}>purple</span>.
                </li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "240px",
                                height: "50px"
                            }}
                        >
                            Likes:
                        </div>
                        gaming, anime, food
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                width: "240px",
                                height: "50px"
                            }}
                        >
                            Dislikes:
                        </div>
                        traffic, noisy eaters, interrupting
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
        </div>
    );
}

export default App;
