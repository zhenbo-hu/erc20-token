const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("SpongeBobWithRole", (m) => {
  const spongeBobWithRole = m.contract("SpongeBobWithRole", [
    "0x758Cdf3310142c038A676453b541C2EF7D9a61aA",
    "0x758Cdf3310142c038A676453b541C2EF7D9a61aA",
  ]);

  return { spongeBobWithRole };
});
