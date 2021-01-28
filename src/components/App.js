import React from 'react';
import AppForm from './AppForm';

export default function App() {
    const onSubmit = (values) => {
        alert(JSON.stringify(values, null, 2));
    };

    return (
        <div>
            <AppForm onSubmit={onSubmit} />
        </div>
    );
}
