const Xray = require('x-ray');
x = Xray();

x('https://kiki.ccu.edu.tw/~ccmisp06/Course/5304.html','table > tr',[
    {
        no:'td:nth-child(2) > font',
        name:'td:nth-child(3) > font',
        teacher:'td:nth-child(4) > font',
    },
]).write('./hello.json');