const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
  res.sendStatus(200);
  
  const message = req.body?.message;
  if (!message?.text) return;
  
  const messageId = message.message_id;
  const chatId = message.chat.id;
  const texto = message.text;
  
  fetch(process.env.N8N_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messageId, chatId, texto })
  }).catch(console.error);
});

app.listen(process.env.PORT || 3000);
