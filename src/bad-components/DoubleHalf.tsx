import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoubleHalfProps {
    dhValue: number;
    setDhValue: (z: number) => void;
}

function Doubler(b: DoubleHalfProps): JSX.Element {
    return <Button onClick={() => b.setDhValue(2 * b.dhValue)}>Double</Button>;
}

function Halver(b: DoubleHalfProps): JSX.Element {
    return <Button onClick={() => b.setDhValue(0.5 * b.dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue}></Doubler>
            <Halver dhValue={dhValue} setDhValue={setDhValue}></Halver>
        </div>
    );
}
