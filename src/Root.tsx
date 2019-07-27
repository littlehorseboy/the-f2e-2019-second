import React from 'react';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Main from './pages/Main/Main';
import store from './reducers/configureStore';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4C653C',
    },
  },
});

export default function Root(): JSX.Element {
  return (
    <>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <DndProvider backend={HTML5Backend}>
            <Main />
          </DndProvider>
        </Provider>
      </MuiThemeProvider>
    </>
  );
}
