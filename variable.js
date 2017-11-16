setTimeout(function () {

  // document.dispatchEvent(new CustomEvent('RW759_connectExtension', {
  //   detail: {
  //     type: 'chats',
  //     value: newchats
  //   }
  // }));

  function postMessage(typ, val) {
    document.getElementById('msn-frame').contentWindow.postMessage({ type: typ, value: val }, '*');
  }

  function updateChats(chats) {
    console.log('updating chats..');

    let newchats = chats.map((chat) => {
      return { name: chat.name }
    });

    postMessage('chats', newchats);
  }

  _.observe(Store.Chat.models, function (newmodel, oldmodel) {
    updateChats(newmodel);
  });

}, 3000);