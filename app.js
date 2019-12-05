const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');

const contentRoutes = require('./routes/content');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(contentRoutes);

app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

app.listen(3001);
