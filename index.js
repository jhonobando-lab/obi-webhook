const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
  res.sendStatus(200);
  
  const message = req.body?.message;
  if (!message?.text) return;
  
  fetch(process.env.N8N_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: message })
  }).catch(console.error);
});

app.listen(process.env.PORT || 3000);
