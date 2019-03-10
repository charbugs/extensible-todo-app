import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';
import GrainIcon from '@material-ui/icons/Grain';
import Grid from '@material-ui/core/Grid';

import { withPlugins } from '../extend';

const PluginHook = props => {
  if (props.PluginComponent)
    return (
      <Grid item>
        <props.PluginComponent />
      </Grid>
    )
  return null;
}

export const Header = props => (
  <AppBar position="static">
    <Toolbar>
      <Grid container spacing={24} justify="flex-end">
        <Grid item>
          <WbSunnyIcon />
        </Grid>
        <Grid item>
          <WbCloudyIcon />
        </Grid>
        <Grid item>
          <GrainIcon />
        </Grid>
        <PluginHook {...props} />
      </Grid>
    </Toolbar>
  </AppBar>
);

export default withPlugins(Header);
