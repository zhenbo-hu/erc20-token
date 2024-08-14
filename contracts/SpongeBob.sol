// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SpongeBob is ERC20, ERC20Burnable, Ownable {
    uint256 public constant INIT_SUPPLY = 1_000_000_000;

    constructor() ERC20("SpongeBob", "SPB") Ownable(msg.sender) {
        _mint(msg.sender, INIT_SUPPLY * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function burn(address from, uint256 amount) public onlyOwner {
        _burn(from, amount);
    }
}
