module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, execute } = deployments;
  const { deployer } = await getNamedAccounts();

 /*  await deploy('UniswapV2Factory', {
    from: deployer,
    args: ['0x01AA5762e1A58D9E98D6474222BC31de710C9Fc9'],
    log: true,
    deterministicDeployment: false,
  });
  
  await execute(
    'UniswapV2Factory',
    {from: deployer, log: true},
    'init_code_hash'
  ); */

  //vrai

  /* await deploy('UniswapV2Router02', {
    from: deployer,
    args: ['0xA23d01F3C75fAd49B431538Ea74b7CE473B0ff8a', '0xae13d989dac2f0debff460ac112a837c89baa7cd'],
    log: true,
    deterministicDeployment: false,
  }); */
  await deploy('Gatekeeper', {
    from: deployer,
    args: [],
    log: true,
    deterministicDeployment: false,
  });
};

module.exports.tags = ['Gatekeeper'];
