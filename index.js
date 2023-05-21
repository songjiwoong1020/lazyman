const schedule = require('node-schedule');
const express = require('express');
const { default: axios } = require('axios');
const app = express();

app.listen(3001, function(){
  schedule.scheduleJob('* * * * * *', function(){
    console.log('start')
    // axios.get('/')
    // .then((res) => {
    //   console.log(res);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  });
});