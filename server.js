var http = require('http');
var fs = require('fs');
var url = require('url');
var express = require('express');

var server = http.createServer(function (req, res) {
  console.log("Server begins")
    var request = url.parse(req.url, true);
    if (request.pathname == '' || request.pathname == '/') {
        request.pathname = "/" + (Math.floor(Date.now() / 1000)).toString();
    }
    var date = request.pathname.slice(1).split("%20").join(' ');
    var unixtime = Date.parse(date)/1000;
    if(!isNaN(date)) {
        unixtime = date;
        date = new Date(Number(date) * 1000);
        date = date.toString().slice(0, 15);
    }
    res.end(JSON.stringify({'unixtime': unixtime, "Natural": date}))
  })


server.listen(process.env.PORT)