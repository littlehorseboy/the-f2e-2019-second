import React from 'react';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Main from './pages/Main/Main';
import store from './reducers/configureStore';

export default function Root(): JSX.Element {
  return (
    <>
      <CssBaseline />
      <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
          <Main />
        </DndProvider>
      </Provider>
    </>
  );
}
