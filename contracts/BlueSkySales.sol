// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BlueSkySales {
    struct Sale {
        string distributor;
        uint256 revenue;
        uint256 purity;
        uint256 timestamp;
    }

    Sale[] public salesHistory;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function recordSale(string memory _distributor, uint256 _revenue, uint256 _purity) public {
        require(msg.sender == owner, "Only the owner can log sales.");
        salesHistory.push(Sale(_distributor, _revenue, _purity, block.timestamp));
    }

    function getSalesCount() public view returns (uint256) {
        return salesHistory.length;
    }
}
