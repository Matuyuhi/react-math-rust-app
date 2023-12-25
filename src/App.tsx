// App.tsx
import React, { useState, useEffect } from 'react';
import CalculationTab from './CalculationTab';
import calculationsData from './assets/pages.json';
import init, {calc} from '../wasm/pkg/wasm';
import { Calculation } from './types.ts';
const App: React.FC = () => {
    const [calculations, setCalculations] = useState<Calculation[]>([]);

    useEffect(() => {
        init()
        setCalculations(calculationsData.calculations);
    }, []);

    const performCalculation = (input1: number, input2: number): number =>  {
        // ここで wasm の関数を呼び出す
        return calc(input1, input2)
    };

    return (
        <div>
            {calculations.map(calc => (
                <CalculationTab
                    key={calc.id}
                    calculation={calc}
                    performCalculation={performCalculation}
                />
            ))}
        </div>
    );
};

export default App;
