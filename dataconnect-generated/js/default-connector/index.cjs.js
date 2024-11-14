const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'CODE-TODO',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

