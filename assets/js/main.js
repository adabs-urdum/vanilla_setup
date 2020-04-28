"use strict";

import "babel-polyfill";

Array.prototype.getRandomValue = function () {
  return this[Math.floor(Math.random() * this.length)];
};

document.addEventListener("DOMContentLoaded", function () {
  class TestClass {
    constructor() {
      this.bindEvents();
    }

    bindEvents = () => {
      window.addEventListener("resize", this.onWindowResize);
    };

    onWindowResize = (e) => {
      console.log("onWindowResize");
    };
  }

  const testInstance = new TestClass();
});
