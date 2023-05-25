const schedule = require('node-schedule');
const express = require('express');
const { default: axios } = require('axios');
const app = express();
require('dotenv').config();

const url1 = process.env.URL1;
const url2 = process.env.URL2;
const NEED_TIME = 1810;
const depTimeCheck = (depTime) => {
  if(depTime > NEED_TIME){
    console.log('실행');
  }
}
const axiosRes = (res) => {
  console.log('함수실행')
  // res.data.data.replyAvailFare.availFareSet
  // console.log(res.data.data.replyAvailFare);
  console.log('응답성공')
  const data = res.data.data.replyAvailFare.availFareSet;
  data.forEach(v => {
    // v.segFare.depTime.slice(0, 2)standard Time
    depTimeCheck(v.segFare.depTime);
  })
  // const depTime = data.map(v => v.segFare.depTime);
}
const urlPattern = (code) => `${url1}${code}${url2}`;

app.listen(3001, function(){
  schedule.scheduleJob('* * * * * *', function(){
    console.log('start');
    //1
    axios.get(urlPattern('RS'))
    .then(axiosRes)
    .catch((err) => {
      console.log(err);
    });
    //2
    axios.get(urlPattern('BX'))
    .then(axiosRes)
    .catch((err) => {
      console.log(err);
    });
    //3
    axios.get(urlPattern('OZ'))
    .then(axiosRes)
    .catch((err) => {
      console.log(err);
    });
    //4
    axios.get(urlPattern('LJ'))
    .then(axiosRes)
    .catch((err) => {
      console.log(err);
    });
    //5
    axios.get(urlPattern('TW'))
    .then(axiosRes)
    .catch((err) => {
      console.log(err);
    });
    //6
    axios.get(urlPattern('ZE'))
    .then(axiosRes)
    .catch((err) => {
      console.log(err);
    });
    //7
    axios.get(urlPattern('7C'))
    .then(axiosRes)
    .catch((err) => {
      console.log(err);
    });
    //8
    axios.get(urlPattern('KE'))
    .then(axiosRes)
    .catch((err) => {
      console.log(err);
    });
  });
})