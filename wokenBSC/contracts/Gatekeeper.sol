// SPDX-License-Identifier: GPL-3.0
pragma solidity ^ 0.6.6;

import "./BokkyPooBahsDateTimeLibrary.sol";
import './interfaces/IGatekeeper.sol';
import './libraries/Ownable.sol';

contract Gatekeeper is Ownable, IGatekeeper
{
	int constant EARLY_OFFSET = 14;
	int constant LATE_OFFSET = -12;

	int public _utcOffset = -4;
	uint public _openingHour = 9;
	uint public _openingMinute = 30;
	uint public _closingHour = 16;
	uint public _closingMin = 0;

	constructor() public {}

	function isTradingOpen() public view override returns(bool)
	{
		uint256 blockTime = block.timestamp;
		return isTradingOpenAt(blockTime);
	}

	function isTradingOpenAt(uint256 timestamp) public view returns(bool)
	{
		uint256 localTimeStamp = applyOffset(timestamp);


		if (BokkyPooBahsDateTimeLibrary.isWeekEnd(localTimeStamp))
		{
			return false;
		}

		uint now_hour;
		uint now_minute;

		(, , , now_hour, now_minute, ) = BokkyPooBahsDateTimeLibrary.timestampToDateTime(localTimeStamp);

		return isOpeningHour(now_hour, now_minute);
	}

	function applyOffset(uint256 timestamp) internal view returns(uint256)
	{
		uint localTimeStamp;
		if (_utcOffset >= 0)
		{
			localTimeStamp = BokkyPooBahsDateTimeLibrary.addHours(timestamp, uint(_utcOffset));
		}
		else
		{
			localTimeStamp = BokkyPooBahsDateTimeLibrary.subHours(timestamp, uint(-_utcOffset));
		}
		return localTimeStamp;
	}


	function isOpeningHour(uint hour, uint minute) internal view returns(bool)
	{
		if ((hour < _openingHour) || (hour >= _closingHour))
		{
			return false;
		}

		if ((hour == _openingHour) && (minute < _openingMinute))
		{
			return false;
		}
		return true;
	}

	function setUTCOffset(int utcOffset) public onlyOwner()
	{
		require(utcOffset > EARLY_OFFSET, "Invalid UCT offset");
		require(utcOffset < LATE_OFFSET, "Invalid UCT offset");
		_utcOffset = utcOffset;
	}
}