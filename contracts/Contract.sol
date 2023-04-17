// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// 객체 설정, 카운터 시작을 0으로 시작
contract MyContract {
    uint256 private counter = 0;

    function getCounter() public view returns (uint256) {
        return counter;
    }

    // 증가하는 카운터의 객체를 만들어서 작동
    function incrementCounter() public {
        counter++;
    }

    // 감수하는 카운터
    function decrementCounter() public {
        counter--;
    }
}
