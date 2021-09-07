import React, { useState } from "react";
import "./App.css";
import Symbol from "./components/operators";
import Numbers from "./components/numbers";
import Equal from "./components/equal";
import * as math from "mathjs";

function App() {
    const [expression, setExpression] = useState("0");
    const operations = ["+", "-", "*", "/"];
    const numbers = [
        ["7", "8", "9"],
        ["4", "5", "6"],
        ["1", "2", "3"],
        ["0", ".", "AC"],
    ];

    const handleReset = () => {
        setExpression("0");
    };

    const handleClick = (sign) => {
        expression === "0" && sign === "."
            ? setExpression(expression + sign)
            : expression !== "0"
            ? setExpression(expression + sign)
            : setExpression(sign);
    };

    const handleEqual = () => {
        try {
            setExpression(math.evaluate(expression));
        } catch (e) {
            setExpression("wrong expression");
        }
    };

    return (
        <div className="calculator">
            <div className="input">{expression}</div>
            <div className="buttons">
                <div className="operators">
                    {operations.map((operation) => (
                        <Symbol
                            key={operation}
                            symbol={operation}
                            onClick={handleClick}
                        />
                    ))}
                </div>
                <div className="leftPanel">
                    {numbers.map((numbers, index) => (
                        <Numbers
                            key={index}
                            numbers={numbers}
                            onClick={handleClick}
                            onReset={handleReset}
                        />
                    ))}
                </div>
                <Equal onEqual={handleEqual} />
            </div>
        </div>
    );
}

export default App;
