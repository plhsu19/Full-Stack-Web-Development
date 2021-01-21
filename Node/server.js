// build a simple RESTful API server using express
const express = require('express')
// import express from 'express';

const app = express();

app.use(express.static(__dirname + '/public'))

app.listen(3000)