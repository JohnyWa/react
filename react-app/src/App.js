import React from 'react';
// import './components/inlineStyles'
import InlineStyles from "./components/inlineStyles";
import CssStyles from "./components/cssStyles";
import SassStyles from "./components/sassStyles";
import ModulesCssStyles from "./components/moduleCssStyles";
import StylesComponentStyles from "./components/stylesComponentStyles";

function App() {
  return (
    <div className="App">
      {/*<InlineStyles />*/}
      {/*<CssStyles />*/}
      {/*<SassStyles />*/}
      {/*<ModulesCssStyles status />*/}
      <StylesComponentStyles name="Peter" status={false} />
    </div>
  );
}

export default App;
