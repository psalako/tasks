/* eslint-disable indent */
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<string>("3");
    const [reqAttempts, requestAttempts] = useState<string>("0");

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formAttempts">
                <Form.Label>Set Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        requestAttempts(event.target.value)
                    }
                />
                <div>Attempts Left: {attempts}</div>
                <Button
                    onClick={() =>
                        setAttempts((parseInt(attempts) - 1).toString())
                    }
                    disabled={parseInt(attempts) === 0}
                >
                    use
                </Button>
                <Button
                    onClick={() =>
                        reqAttempts !== "" && reqAttempts !== "0"
                            ? setAttempts(
                                  (
                                      parseInt(attempts) + parseInt(reqAttempts)
                                  ).toString()
                              )
                            : null
                    }
                >
                    gain
                </Button>
            </Form.Group>
        </div>
    );
}
