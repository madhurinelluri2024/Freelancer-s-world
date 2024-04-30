// migrations/2_deploy_contracts.js
const OrderContract = artifacts.require("OrderContract");

module.exports = function (deployer) {
  deployer.deploy(OrderContract);
};
