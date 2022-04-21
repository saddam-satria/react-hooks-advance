import React from 'react';

const MenusContext = React.createContext();

const Toolbar = () => {
  return (
    <MenusContext.Provider value={'sarah'}>
      <UseContextPage />
    </MenusContext.Provider>
  );
};

const UseContextPage = () => {
  const ctx = React.useContext(MenusContext);

  return (
    <div>
      <h1>{ctx}</h1>
    </div>
  );
};

export default Toolbar;
