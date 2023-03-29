import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="userChoices">
                <Form.Label>What is your answer?</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((a: string) => (
                        <option key={a} value={a}>
                            {a}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>
                {(choice === expectedAnswer && "✔️") ||
                    (choice !== expectedAnswer && "❌")}
            </div>
        </div>
    );
}
