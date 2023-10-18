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
 
app.listen(3300, ()=>{
    console.log("Sever is now listening at port 3300");
})

client.connect();

//SELECTS START HERE
app.get('/users', (req, res)=>{
    client.query(`Select * from LoginInfo`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        } else {
            res.send('Failed to retrieve data.')
        }
    });
    client.end();
})

app.get('/students', (req, res)=>{
    client.query(`Select * from Student`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        } else {
            res.send('Failed to retrieve data.')
        }
    });
    client.end();
})

app.get('/friendpreferences', (req, res)=>{
    client.query(`Select * from FriendPreference`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        } else {
            res.send('Failed to retrieve data.')
        }
    });
    client.end;
})

app.get('/rooms', (req, res)=>{
    client.query(`Select * from Room`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        } else {
            res.send('Failed to retrieve data.')
        }
    });
    client.end;
})

app.get('/counselors', (req, res)=>{
    client.query(`Select * from Counselor`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        } else {
            res.send('Failed to retrieve data.')
        }
    });
    client.end;
})

//INSERTIONS START HERE
app.post('/users', (req, res)=>{
    const user = req.body;
    let insertUserQuery = `INSERT INTO LoginInfo(username, password) values('${user.username}', '${user.password}')`
    client.query(insertUserQuery, (err, result)=>{
        if(!err){
            res.send('Inserted user!');
        } else {
            res.send('Failed to insert data.')
        }
    });
    client.end;
})

app.post('/students', (req, res)=>{
    const student = req.body;
    let insertStudentQuery = `INSERT INTO Student(sID, firstName, lastName, grade, genderType, groupID) 
    values('${student.SID}', '${student.first_name}', '${student.last_name}', '${student.grade}', '${student.gender}', null)`
    client.query(insertStudentQuery, (err, result)=>{
        if(!err){
            res.send('Inserted student!');
        } else {
            res.send('Failed to insert data.')
        }
    });
    client.end;
})

app.post('/friendpreferences', (req, res)=>{
    const preference = req.body;
    let insertPreferenceQuery = `INSERT INTO FriendPreference(SID1, SID2, isApart) 
    values('${preference.first_pref_SID}', '${preference.second_pref_SID}', '${preference.relationship}')`
    client.query(insertPreferenceQuery, (err, result)=>{
        if(!err){
            res.send('Inserted preference!');
        } else {
            res.send('Failed to insert data.')
        }
    });
    client.end;
})

app.post('/rooms', (req, res)=>{
    const room = req.body;
    let insertRoomQuery = `INSERT INTO Room(rID, roomType) 
    values('${room.room_num}', '${room.room_type}')`
    client.query(insertRoomQuery, (err, result)=>{
        if(!err){
            res.send('Inserted room!');
        } else {
            res.send('Failed to insert data.')
        }
    });
    client.end;
})

app.post('/counselors', (req, res)=>{
    const counselor = req.body;
    let insertCounselorQuery = `INSERT INTO Counselor(firstname, lastname, groupID) 
    values('${counselor.counselor_firstname}', '${counselor.counselor_lastname}', null)`
    client.query(insertCounselorQuery, (err, result)=>{
        if(!err){
            res.send('Inserted counselor!');
        } else {
            res.send('Failed to insert data.')
        }
    });
    client.end;
})
