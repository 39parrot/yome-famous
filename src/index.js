'use strict';

var famous = require('famous');
var Face = require('./Face');
var DOMElement = famous.domRenderables.DOMElement;
var FamousEngine = famous.core.FamousEngine;
var GestureHandler = famous.components.GestureHandler;
FamousEngine.init();

var scene= FamousEngine.createScene();

var root = scene.addChild();

var son = new Face(root, { src: './images/famous_logo.png', size: 48 });

son
  .setAlign(0.5,0.5)
  .setMountPoint(.5, .5);

// Create a Gesture Handler to handle dragging
var sonGesture = new GestureHandler(son);

// Update son node's position with drag position
sonGesture.on('drag', function(e,p){
    var currentPos = son.getPosition()
    var newPosX = currentPos[0] + e.centerDelta.x
    var newPosY = currentPos[1] + e.centerDelta.y
    son.setPosition(newPosX,newPosY)
});
