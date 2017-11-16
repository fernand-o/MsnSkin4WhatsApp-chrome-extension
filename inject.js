var iframe;

function injectScript(src, remove = false) {
  let s = document.createElement('script');
  s.src = chrome.extension.getURL(src);
  (document.head || document.documentElement).appendChild(s);

  if (remove) {
    s.onload = function () {
      s.remove();
    };
  }
}

function removeOriginalContent() {
  document.getElementById('app').innerHTML = '';
}

function injectIframe() {
  let iframe = document.createElement('iframe')
  iframe.id = 'msn-frame';
  iframe.src = chrome.runtime.getURL('/dist/index.html');
  document.getElementById('app').appendChild(iframe);
}

setTimeout(() => {
  removeOriginalContent();
  injectIframe();
  injectScript('variable.js', true);
  injectScript('underscore-observe.js');
}, 1000);

  // document.addEventListener('RW759_connectExtension', function (e) {
  //   console.log(e);
  //   $('#app').find('#msn-frame')[0].contentWindow.postMessage(e.detail, '*');
  // });
