import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface ShoveBoxProps {
    position: number;
    setPosition: (a: number) => void;
}

function ShoveBoxButton(b: ShoveBoxProps) {
    return (
        <Button onClick={() => b.setPosition(4 + b.position)}>
            Shove the Box
        </Button>
    );
}

function MoveableBox(b: ShoveBoxProps): JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: b.position + "px"
            }}
        ></div>
    );
}

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);
    const props: ShoveBoxProps = {
        position: position,
        setPosition: setPosition
    };
    const box = MoveableBox(props);
    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton
                    position={position}
                    setPosition={setPosition}
                ></ShoveBoxButton>
                {box}
            </div>
        </div>
    );
}
