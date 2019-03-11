import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pluginStore } from '.';

// withPlugins must be the innermost HOC to match the name of the target component
export function withPlugins(TargetComponent, targetName) {
  return class extends Component {
    render() {

      console.log('eta: withPlugins: getPlugins():', pluginStore.getPlugins());
      console.log('eta: withPlugins: TargetComponent.name:', TargetComponent.name);
      const plugin = pluginStore.getPlugins().find(plugin => plugin.target === targetName);

      console.log('eta: withPlugins: found plugin:', plugin);

      if (!plugin) {
        return <TargetComponent { ...this.props } />
      }
      else if (plugin.modus === 'remove') {
        return null;
      }
      else if (plugin.modus === 'replace') {
        const PluginComponent = connectPluginComponent(plugin);
        return <PluginComponent { ...this.props } />
      }
      else if (plugin.modus === 'add') {
        const PluginComponent = connectPluginComponent(plugin);
        return <TargetComponent {...this.props} PluginComponent={PluginComponent} />
      }
    }
  }
}

function connectPluginComponent(plugin) {
  return connect(plugin.mapStateToProps, plugin.mapDispatchToProps)(plugin.component);
}
