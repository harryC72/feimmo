import React, { CSSProperties } from 'react';
import './App.css';
import { topHeader } from './theme/theme';
import { ReactComponent as Logo } from "./immo-logo.svg"
import { header } from './content/content';
import { SearchContainer } from "./components/SearchContainer"

const headerContainer = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: 10,
}

const logoContainer = {
  position: "relative"
}

const headerStyle = {
  background: topHeader,
  width: 1100,
  height: "80px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "bold",
  fontSize: 20
}

const logo = {
  height: 80,
  width: 80,
  position: "absolute",
  top: "1px",
  right: "400px",
  border: "4px solid white"
}

function App ()
{
  return (
    <div className="App">
      <div style={ headerContainer as CSSProperties }>
        <header style={ headerStyle as CSSProperties }><div style={ logoContainer as CSSProperties }><Logo style={ logo as React.CSSProperties } /></div>{ header }
        </header>
        <SearchContainer />
      </div>
    </div>
  );
}

export default App;
