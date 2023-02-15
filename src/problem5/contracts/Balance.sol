// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

interface IERC20 {
    function balanceOf(address account) external view returns (uint);
}

contract Balance {
    struct Token {
        address addr;
        uint balance;
    }

    function getBalances(address wallet, address[] memory tokenAddresses) public view returns(Token[] memory) {
        Token[] memory tokens = new Token[](tokenAddresses.length);
        for (uint i = 0; i < tokenAddresses.length; i++) {
            IERC20 ercToken = IERC20(tokenAddresses[i]);
            uint balance = ercToken.balanceOf(wallet);
            tokens[i] = Token(tokenAddresses[i], balance);
        }
        return tokens;
    }
}