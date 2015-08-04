var DOMElement = require('famous/dom-renderables/DOMElement');

// options - Object
// options.src - image src
// options.size - image size
function Face(node, options) {
  var size = options.size ? options.size : 48;
  var ava = node.addChild();
  ava
    .setSizeMode('absolute', 'absolute', 'absolute')
    .setAbsoluteSize(size, size)
  ava.el = new DOMElement(ava, {tagName: 'div'});
  // ava.el.setAttribute('src', options.src);
  ava.el.setProperty('background-image', 'url(./images/me.jpeg)');
  ava.el.setProperty('background-size', size + 'px' + ' ' + size + 'px');
  ava.el.setProperty('border-radius', size / 2 + 'px');
  return ava;
}

module.exports = Face;
