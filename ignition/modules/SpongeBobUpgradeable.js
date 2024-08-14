const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("SpongeBobUpgradeable", (m) => {
  const spongeBobUpgradeable = m.contract("SpongeBobUpgradeable", []);

  m.call(spongeBobUpgradeable, "initialize", [
    "0x758Cdf3310142c038A676453b541C2EF7D9a61aA",
    "0x758Cdf3310142c038A676453b541C2EF7D9a61aA",
  ]);

  return { spongeBobUpgradeable };
});
