import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function startQuiz(): void {
        setAttempts(attempts - 1);
        setProgress(!progress);
    }
    function stopQuiz(): void {
        setProgress(!progress);
    }
    function Mulligan(): void {
        setAttempts(attempts + 1);
    }
    return (
        <div>
            <Button onClick={startQuiz} disabled={progress || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>
            {<div> Attempts: {attempts} </div>}
            <Button onClick={Mulligan} disabled={progress}>
                Mulligan
            </Button>
        </div>
    );
}
