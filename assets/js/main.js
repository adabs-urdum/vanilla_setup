"use strict";

import "babel-polyfill";

Array.prototype.getRandomValue = inputArray => {
  return inputArray[Math.floor(Math.random() * inputArray.length)];
};

document.addEventListener("DOMContentLoaded", function() {
  class TestClass {
    constructor(one, two) {
      console.log("TestClass -- constructor");
      this.one = one;
      this.two = two;
      console.log(this.one + " " + this.two);
      this.test();
    }

    test = () => {
      alert("test");
    };
  }

  const testInstance = new TestClass("test", "class");

  function WebGLThreeJS() {
    var scene, camera, renderer;

    function init() {
      setVars();
      bindEvents();
      initThree();
      mainLoop();
    }

    function setVars() {}

    function bindEvents() {}

    function initThree() {
      createScene();
      createRenderer();
      createPerspectiveCamera();
    }

    function createScene() {
      scene = new THREE.Scene();
    }

    function createRenderer() {
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
    }

    function createPerspectiveCamera() {
      camera = new THREE.PerspectiveCamera(
        30,
        window.innerWidth / window.innerHeight,
        1,
        501
      );
      camera.position.z = 10;
      camera.position.x = 0;
      camera.position.y = 0;
    }

    function mainLoop() {
      renderer.render(scene, camera);
      requestAnimationFrame(mainLoop);
    }

    init();
  }
});
