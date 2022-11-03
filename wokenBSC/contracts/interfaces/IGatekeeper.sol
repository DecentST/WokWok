pragma solidity =0.6.6;
interface IGatekeeper {
  function isTradingOpen() external view returns (bool);
}