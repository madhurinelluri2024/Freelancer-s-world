
// SPDX-License-Identifier: MIT 
pragma solidity >=0.5.0 <0.9.0;



contract WalletContract {
    mapping(address => uint256) public balances;

    event WalletCreated(address indexed user);

    function createWallet() public {
        require(balances[msg.sender] == 0, "Wallet already exists");
        balances[msg.sender] = 100 ether; // Initial balance
        emit WalletCreated(msg.sender);
    }

    function transfer(address _to, uint256 _amount) public {
        require(balances[msg.sender] >= _amount, "Insufficient balance");
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
    }
}
