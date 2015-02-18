'use strict';

var express = require('express');
var serveStatic = require('serve-static');
var swig = require('swig');

var app = express();

app.engine('html', swig.renderFile);
app.set('view cache', false);
swig.setDefaults({ cache: false });

app.use(serveStatic('static', { index: false }));

app.listen(3333);
