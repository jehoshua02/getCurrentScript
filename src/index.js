var getCurrentScript = function () {
  if (document.currentScript) {
    return document.currentScript.src;
  } else {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1].src;
  }
};

module.exports.getCurrentScript = getCurrentScript;
