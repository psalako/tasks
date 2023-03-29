import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("White");

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
                    id="color-check-white"
                    label="White"
                    value="White"
                    checked={color === "White"}
                />
            </div>
            <div data-test-id="colored-box">You have chosen {color}.</div>
        </div>
    );
}
