import React from 'react';
import AppHeader from './appHeader/AppHeader';
import AppSidebar from './appSidebar/AppSidebar';

const Layout = () => {
  return (
    <div className="c-layout">
      {/* <AppHeader /> */}
      <AppSidebar />

      {/* <div className="wrapper d-flex flex-column min-vh-100 bg-light"> 
          <div className="body flex-grow-1 px-3">
            <AppContent />
          </div>
          <AppFooter />
        </div> */}
    </div>
  );
};

export default Layout;
