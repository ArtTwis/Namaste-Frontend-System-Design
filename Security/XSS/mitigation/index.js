const express = require('express');

const app = express();

const PORT = 8010;

app.use((req, res, next) => {
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self';" + 
        "script-src 'self' 'unsafe-inline' 'nonce-randomKey' http://unsecure.com;"
    )
    next();
})

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.listen(PORT, () => {
    console.log(`app is listening on http://localhost:${PORT}/`);
})