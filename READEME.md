# ERC20 Token

## Using OpenZeppelin to develop ERC20 token

- [Normal ERC20 token](./contracts/SpongeBob.sol)
- [ERC20 token with role access control](./contracts/SpongeBobWithRole.sol)
- [ERC20 token with upgradeable](./contracts/SpongeBobUpgradeable.sol)

## How to run

```shell
npm install
npx hardhat compile
npx hardhat node // in a different tab
npx hardhat ignition deploy ignition/modules/xxx.js --network localhost
```
