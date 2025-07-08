const chatBox = document.getElementById('chat');
const msgInput = document.getElementById('msg');
const KEY = 'chat_bogdan_mitya';
let lastLength = 0;

function loadChat() {
  const messages = JSON.parse(localStorage.getItem(KEY)) || [];
  if (messages.length > lastLength) {
    const sound = new Audio('../../assets/sounds/message_received.m4a');
    sound.play();
  }
  lastLength = messages.length;
  chatBox.innerHTML = messages.map(msg => '<div>' + msg + '</div>').join('');
}

function send() {
  const val = msgInput.value.trim();
  if (!val) return;
  const messages = JSON.parse(localStorage.getItem(KEY)) || [];
  messages.push('Mitya: ' + val);
  localStorage.setItem(KEY, JSON.stringify(messages));
  msgInput.value = '';
  loadChat();

  const sound = new Audio('../../assets/sounds/message_sent.m4a');
  sound.play();
}

loadChat();
setInterval(loadChat, 2000);
