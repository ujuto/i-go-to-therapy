const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
```

Then put your `therapy-world.html` inside a `public/` folder and rename it to `index.html`.

So your final structure is:
```
my-project/
├── package.json
├── server.js
└── public/
    └── index.html
