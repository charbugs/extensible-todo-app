
let pluginStore = [];

export function storePlugins(plugins) {
  pluginStore = plugins || [];
}

export function getPlugins() {
  return pluginStore;
}
