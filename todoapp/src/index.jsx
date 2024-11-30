import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store'
import theme from './theme'
import { PersistGate } from 'redux-persist/lib/integration/react'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
