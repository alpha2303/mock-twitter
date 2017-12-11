import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import SideBar from './Sidebar';
import Search from './Search';

export const TimelineDrawer = DrawerNavigator({
  Profile: { screen: Search },
  Lists: { screen: Search },
  Moments: { screen: Search },
  Highlights: { screen: Search },
},
{
  contentComponent: props => <SideBar {...props} />
});

