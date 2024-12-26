const express = require('express');
const path = require('path');

const app = express();
const port = 80;


app.get('/', (req, res) => {
  res.render(path.join(__dirname, 'main', 'main.ejs'));
});

app.get('/main', (req, res) => {
  res.redirect('/');
})

app.get('/user/login', (req, res) => {
  res.render(path.join(__dirname, 'main', 'login.ejs'));
});

app.post('/user/loginGo', (req, res) => {
  console.log(`누가 로그인을 시도했다요`);
  res.send('아직 구현 안 됨!');
});

app.listen(port, () => {
  console.log(`서버 시작`);
});