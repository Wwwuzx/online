import React, { useState } from 'react'
import { startTransition } from 'react';

const TestPage: React.FC = () => {
    const [input, setInput] = useState('');

    const [list, setList] = useState([]);

    const heavyFilter = (value) => {
        // 模拟一个耗时的计算
        const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
        return items.filter(item => item.toLowerCase().includes(value.toLowerCase()));
    };

    const a = 10;
    console.log(a);
    const b = 20;
    console.log(b);

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);

        startTransition(() => {
            const newList = heavyFilter(value); // 模拟大计算
            setList(newList as any);
        });
    };
    return (
        <div>
            <input type="text" onChange={handleChange} />
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );

};
export default TestPage;