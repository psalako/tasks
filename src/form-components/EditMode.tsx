/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [mode, editing] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        editing(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <Form.Switch
                type="switch"
                id="is-editing"
                label="Edit Mode?"
                checked={mode}
                onChange={updateMode}
            />
            {mode && (
                <div>
                    <Form.Check
                        type="checkbox"
                        id="is-student"
                        label="Student?"
                        checked={student}
                        onChange={updateStudent}
                        disabled={!mode}
                    />
                    <Form.Group controlId="Name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={updateName}
                            disabled={!mode}
                        />
                    </Form.Group>
                </div>
            )}
            {!mode ? name : null}
            {!mode ? (student ? " is a student." : " is not a student.") : null}
        </div>
    );
}
