

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import Subcribe from './Components/Subcribe/Subcribe';
import { ContextProvider, cartState, reducer } from './ContextProvider'
function App() {
  return (
    <ContextProvider reducer={reducer} cartState={cartState}>
      <div >
        <Header />
        <Main />
        <Subcribe />
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;
