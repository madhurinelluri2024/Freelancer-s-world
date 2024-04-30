// SPDX-License-Identifier: MIT 
pragma solidity >=0.5.0 <0.9.0;

contract OrderContract {
    struct Order {
        uint256 orderId;
        string jobTitle;
        string jobDescription;
        uint256 numberOfDays;
        uint256 payPerHour;
        address customer;
        address freelancer;
        bool isAccepted;
        bool isCompleted;
    }

    mapping(uint256 => Order) public orders;
    uint256 public orderCount;

    event OrderPlaced(uint256 orderId, address indexed customer);

    function placeOrder(string memory _jobTitle, string memory _jobDescription, uint256 _numberOfDays, uint256 _payPerHour) public {
        orderCount++;
        orders[orderCount] = Order(orderCount, _jobTitle, _jobDescription, _numberOfDays, _payPerHour, msg.sender, address(0), false, false);
        emit OrderPlaced(orderCount, msg.sender);
    }
}
