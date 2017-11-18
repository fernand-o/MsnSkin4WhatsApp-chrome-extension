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
      let msgs = chat.msgs.models.map((item) => {
        return {
          message: item.__x_body,
          isSentByMe: item.__x_isSentByMe
        };
      });

      return {
        name: chat.name,
        id: chat.__x_id,
        unreadCount: chat.unreadCount,
        messages: msgs
      }
    });

    postMessage('chats', newchats);
  }

  window.addEventListener('message', receiveMessage);

  function receiveMessage(e) {
    console.log(e);

    if (e.data.type === 'sendMessage') {
      sendMessage(e.data.value);
    }
  }

  function sendMessage(msg) {
    const chatId = msg.chatId;
    const message = msg.message;

    const chat = Store.Chat.models.find((item) => {
      if (item.__x_id === chatId) {
        return true;
      }
    });

    chat.sendMessage(message);
  }

  _.observe(Store.Chat.models, function (newmodel, oldmodel) {
    updateChats(newmodel);
  });

}, 3000);