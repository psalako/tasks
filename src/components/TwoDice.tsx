import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [d1, setD1] = useState<number>(1);
    const [dRoll1, setRoll1] = useState<boolean>(false);
    const [d2, setD2] = useState<number>(6);
    const [dRoll2, setRoll2] = useState<boolean>(false);
    function Roll1(): void {
        setD1(d6());
        setRoll1(!dRoll1);
    }
    function Roll2(): void {
        setD2(d6());
        setRoll2(!dRoll2);
    }
    return (
        <div>
            <div>
                Dice 1: <span data-testid="left-die">{d1}</span>
            </div>
            <div>
                Dice 2: <span data-testid="right-die">{d2}</span>
            </div>
            <Button onClick={Roll1}>Roll Left</Button>
            <Button onClick={Roll2}>Roll Right</Button>
            {d1 === d2 && d1 !== 1 && <div>Win</div>}
            {d1 !== d2 && dRoll1 !== dRoll2 && <div>Lose</div>}
            {d1 == d2 && d1 === 1 && dRoll1 !== dRoll2 && <div>Lose</div>}
        </div>
    );
}
