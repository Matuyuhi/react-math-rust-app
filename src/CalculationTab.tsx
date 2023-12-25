// CalculationTab.tsx
import React, { useState } from 'react';

interface Props {
    calculation: {
        id: string;
        title: string;
        description: string;
        inputs: string[];
    };
    performCalculation: (input1: number, input2: number) => number; // Rust関数
}

const CalculationTab: React.FC<Props> = ({ calculation, performCalculation }) => {
    const [inputValues, setInputValues] = useState({ number1: 0, number2: 0 });
    const [result, setResult] = useState<number | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValues({...inputValues, [e.target.name]: parseFloat(e.target.value)});
    };

    const handleSubmit = () => {
        const calcResult = performCalculation(inputValues.number1, inputValues.number2);
        setResult(calcResult);
    };

    return (
        <div>
            <h3>{calculation.title}</h3>
            <p>{calculation.description}</p>
            {calculation.inputs.map(input => (
                <input
                    key={input}
                    type="number"
                    name={input}
                    value={inputValues[input as keyof typeof inputValues]}
                    onChange={handleInputChange}
                />
            ))}
            <button onClick={handleSubmit}>計算する</button>
            {result !== null && <p>結果: {result}</p>}
        </div>
    );
};

export default CalculationTab;
