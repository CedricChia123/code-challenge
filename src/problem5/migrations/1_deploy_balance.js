var Contract = artifacts.require("Balance");

module.exports = function(deployer) {
  deployer.deploy(Contract);
};