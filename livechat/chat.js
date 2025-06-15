// Chat widget logic: açma, kapatma, yeniden açma
(function(){
  const bubble = document.getElementById('chat-bubble');
  let open = false;
  bubble.innerHTML = '<button id="chat-btn">Chat</button>';
  document.body.addEventListener('click', e => {
    if(e.target.id === 'chat-btn'){
      open = !open;
      if(open) alert('Sohbet başlatıldı');
    }
  });
})();