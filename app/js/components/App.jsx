import React from 'react';
import AppHeader from './AppHeader.jsx';
import BodyContent from './BodyContent.jsx';
import AppFooter from './AppFooter.jsx';

export default class App extends React.Component {
   render() {
      return (
        <div>
          <AppHeader/>
          <BodyContent/>
          <AppFooter/>
        </div>
      );
   }
}
