import React from 'react';
import { withPlugins } from '../extend';

const Background = (props) => (
  <>
    { props.PluginComponent && <props.PluginComponent /> }
  </>
);

export default withPlugins(Background, 'Background');
