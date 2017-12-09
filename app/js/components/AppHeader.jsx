import React from 'react';

export default class AppHeader extends  React.Component {
  render() {
     return (
        <header>
          <HeadContainerDiv/>
        </header>
     );
  }
}
class HeadContainerDiv extends React.Component {
   render() {
      return (
         <div className='head-container'>
           <HeadContentDiv/>
         </div>
      );
   }
}
class HeadLogoDiv extends React.Component {
   render() {
      return (
         <div className='head-logo'>
          <HeadLogoHrefDiv/>
         </div>
      );
   }
}
class HeadLogoHrefDiv extends React.Component {
  render() {
    return (
      <a href='#'>
        <HeadLogoImgDiv/>
      </a>
    );
  }
}
class HeadLogoImgDiv extends React.Component {
  render() {
    return (
      <img src='./app/images/to-do.png'/>
    );
  }
}
class HeadContentDiv extends React.Component {
   render() {
      return (
         <div className='head-content'>
            <h1>To-Do</h1>
         </div>
      );
   }
}
