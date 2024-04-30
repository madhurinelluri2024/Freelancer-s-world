var  FreelancerContract = artifacts.require("./FreelancerContract.sol");

module.exports = function(deployer) {
    deployer.deploy( FreelancerContract);
};
