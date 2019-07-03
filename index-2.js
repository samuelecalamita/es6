"use strict";

function testHoisting() {
  var that = this;
  that = 1;

  function getThat() {
    return that;
  }
}

var test = new testHoisting();

console.log(test.getThat);
