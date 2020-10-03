import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';

const TopHeader = () => {
  return (
    <AppBar>
      <ToolBar>
        <h2>タイトル</h2>
      </ToolBar>
    </AppBar>
  );
};

export default TopHeader;
