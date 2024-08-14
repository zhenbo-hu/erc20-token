const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("SpongeBob", (m) => {
  const spongeBob = m.contract("SpongeBob", []);

  return { spongeBob };
});
