
import Main from './Components/Main/Main';
import { ContextProvider, cartState, reducer } from './ContextProvider'
function App() {
  return (
    <ContextProvider reducer={reducer} cartState={cartState}>
            <Main />
    </ContextProvider>
  );
}

export default App;
