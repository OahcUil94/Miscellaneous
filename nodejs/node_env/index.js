const express = require('express');
const app = express();

if ('development' === app.get('env')) {
    console.log('development');
}

// NODE_ENV=development [&&] node index.js
// export NODE_ENV=development && node index.js
// export NODE_ENV=development node index.js 错误
console.log(process.env.NODE_ENV);

process.env.PORT = 123213213; // 123213213
console.log(process.env.PORT);

app.get('/', (req, res) => res.send('ok'));

app.listen(1994, () => {
    console.log('listening in 1994');
});
