import React from 'react';

const App: React.FC<{ message: string }> = ({ message }) => {
    return <div className="app-wrapper">{message}</div>;
};

export default App;
