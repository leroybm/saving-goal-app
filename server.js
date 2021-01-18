const express = require('express')
const app = express()

app.use(express.static('./dist/saving-goal-app'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/saving-goal-app/'}
  );
});

app.listen(process.env.PORT || 8080);

console.log(`Statics server listening on port ${process.env.PORT || 8080}`)