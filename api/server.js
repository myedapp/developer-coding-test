var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
fs = require('fs'),
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port);

app.route('/students/marks').get(function(req, res){  
    let rdMarks = fs.readFileSync('sample.json');
    let rdStudents = fs.readFileSync('users.json');

    let sMarks = JSON.parse(rdMarks);
    let students = JSON.parse(rdStudents);

    for(var i = 0; i < sMarks.length; i++)
    {
        students.forEach(function(s){
            if(sMarks[i].user_id == s.id)
            {
                sMarks[i]['fullname'] = s.fullname;
                return;
            }
        });
    }
    
    res.json(sMarks);
});

console.log('RESTful API server started on: 127.0.0.1:' + port);
