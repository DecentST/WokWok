module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy('UniswapV2Factory', {
    from: deployer,
    log: true,
    deterministicDeployment: false,
  });
};

module.exports.tags = ['UniswapV2Factory'];
