const client = require('./connection.js')

const express = require('express'),
      app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
);
 
app.listen(3001, ()=>{
    console.log("Sever is now listening at port 3300");
})

client.connect();

//SELECTS START HERE
app.get('/users', (req, res)=>{
    client.query(`Select * from summer_camp.LoginInfo`, (err, result)=>{
        res.set({'Access-Control-Allow-Origin': '*'});
        
        if(!err){
            res.send(result.rows);
        } else {
            console.log(err);
            res.send(err);
        }
    });
})

app.get('/students', (req, res)=>{
    client.query(`Select * from summer_camp.Student`, (err, result)=>{
        res.set({'Access-Control-Allow-Origin': '*'});
        
        if(!err){
            res.send(result.rows);
        } else {
            console.log(err);
            res.send(err);
        }
    });
})

app.get('/friendpreferences', (req, res)=>{
    client.query(`Select * from summer_camp.FriendPreference`, (err, result)=>{
        res.set({'Access-Control-Allow-Origin': '*'});
        
        if(!err){
            res.send(result.rows);
        } else {
            console.log(err);
            res.send(err);
        }
    });
})

app.get('/rooms', (req, res)=>{
    client.query(`Select * from summer_camp.Room`, (err, result)=>{
        res.set({'Access-Control-Allow-Origin': '*'});
        
        if(!err){
            res.send(result.rows);
        } else {
            console.log(err);
            res.send(err);
        }
    });
})

app.get('/counselors', (req, res)=>{
    client.query(`Select * from summer_camp.Counselor`, (err, result)=>{
        res.set({'Access-Control-Allow-Origin': '*'});
        
        if(!err){
            res.send(result.rows);
        } else {
            console.log(err);
            res.send(err);
        }
    });
})

//INSERTIONS START HERE
app.post('/users', (req, res)=>{
    const user = req.body;
    console.log(req);
    let insertUserQuery = `INSERT INTO summer_camp.LoginInfo(username, password) values('${user.username}', '${user.password}')`
    client.query(insertUserQuery, (err, result)=>{
        res.set({'Access-Control-Allow-Origin': '*'});
        if(!err){
            res.send('Inserted user!');
        } else {
            console.log(err);
            res.send(err);
        }
    });
})

app.post('/students', (req, res)=>{
    const student = req.body;
    let insertStudentQuery = `INSERT INTO summer_camp.Student(sID, firstName, lastName, grade, genderType, groupID) 
    values('${student.SID}', '${student.first_name}', '${student.last_name}', '${student.grade}', '${student.gender}', null)`
    client.query(insertStudentQuery, (err, result)=>{
        res.set({'Access-Control-Allow-Origin': '*'});
        
        if(!err){
            res.send('Inserted student!');
        } else {
            console.log(err);
            res.send(err);
        }
    });
})

app.post('/friendpreferences', (req, res)=>{
    const preference = req.body;
    let insertPreferenceQuery = `INSERT INTO summer_camp.FriendPreference(SID1, SID2, isApart) 
    values('${preference.first_pref_SID}', '${preference.second_pref_SID}', '${preference.relationship}')`
    client.query(insertPreferenceQuery, (err, result)=>{
        res.set({'Access-Control-Allow-Origin': '*'});
        
        if(!err){
            res.send('Inserted preference!');
        } else {
            console.log(err);
            res.send(err);
        }
    });
})

app.post('/rooms', (req, res)=>{
    const room = req.body;
    let insertRoomQuery = `INSERT INTO summer_camp.Room(rID, roomType) 
    values('${room.room_num}', '${room.room_type}')`
    client.query(insertRoomQuery, (err, result)=>{
        res.set({'Access-Control-Allow-Origin': '*'});
        
        if(!err){
            res.send('Inserted room!');
        } else {
            console.log(err);
            res.send(err);
        }
    });
})

app.post('/counselors', (req, res)=>{
    const counselor = req.body;
    let insertCounselorQuery = `INSERT INTO summer_camp.Counselor(firstname, lastname, groupID) 
    values('${counselor.counselor_firstname}', '${counselor.counselor_lastname}', null)`
    client.query(insertCounselorQuery, (err, result)=>{
        res.set({'Access-Control-Allow-Origin': '*'});
        
        if(!err){
            res.send('Inserted counselor!');
        } else {
            console.log(err);
            res.send(err);
        }
    });
})
