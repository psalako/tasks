import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("pink");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-red"
                    label="red"
                    value="red"
                    checked={color === "red"}
                    style={{
                        backgroundColor: "red"
                    }}
                />
                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-pink"
                    label="pink"
                    value="pink"
                    checked={color === "pink"}
                    style={{
                        backgroundColor: "pink"
                    }}
                />
                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-orange"
                    label="orange"
                    value="orange"
                    checked={color === "orange"}
                    style={{
                        backgroundColor: "orange"
                    }}
                />
                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-yellow"
                    label="yellow"
                    value="yellow"
                    checked={color === "yellow"}
                    style={{
                        backgroundColor: "yellow"
                    }}
                />
                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-green"
                    label="green"
                    value="green"
                    checked={color === "green"}
                    style={{
                        backgroundColor: "green"
                    }}
                />
                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-blue"
                    label="blue"
                    value="blue"
                    checked={color === "blue"}
                    style={{
                        backgroundColor: "blue"
                    }}
                />
                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-indigo"
                    label="indigo"
                    value="indigo"
                    checked={color === "indigo"}
                    style={{
                        backgroundColor: "indigo"
                    }}
                />
                <Form.Check
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="color-check-purple"
                    label="purple"
                    value="purple"
                    checked={color === "purple"}
                    style={{
                        backgroundColor: "purple"
                    }}
                />
            </div>
            <div>You have chosen:</div>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color
                }}
            >
                {color}
            </div>
        </div>
    );
}
