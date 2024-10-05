import React from 'react';
import Index from './Landing Page/Index';

export const MyContext = React.createContext();

const App = () => {
    const [scrolledDown, setScrolledDown] = React.useState(false);

    return (
      <MyContext.Provider value={{ scrolledDown, setScrolledDown }}>
        <div className="app">
          <Index />
        </div>
      </MyContext.Provider>
    )
}

export default App;