import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const orderedDays: string[] = ["✊🏿", "🎃", "🦃", "🎄", "🎉"];
    const favDays: string[] = ["✊🏿", "🎄", "🦃", "🎉", "🎃"];
    const [Holiday, setHoliday] = useState<string>(orderedDays[0]);
    function nextFav(): void {
        const index = favDays.findIndex(
            (hol: string): boolean => hol === Holiday
        );
        index === 4 ? setHoliday(favDays[0]) : setHoliday(favDays[index + 1]);
    }
    function nextOrdered(): void {
        const index = orderedDays.findIndex(
            (hol: string): boolean => hol === Holiday
        );
        index === 4
            ? setHoliday(orderedDays[0])
            : setHoliday(orderedDays[index + 1]);
    }
    return (
        <div>
            <div>Holiday: {Holiday}</div>
            <Button onClick={nextFav}>Advance by Alphabet</Button>
            <Button onClick={nextOrdered}>Advance by Year</Button>
        </div>
    );
}
