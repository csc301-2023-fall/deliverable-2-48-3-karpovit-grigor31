-- Initalization

CREATE USER postgres SUPERUSER;
CREATE DATABASE postgres WITH OWNER postgres;

drop schema if exists summer_camp cascade; 
create schema summer_camp;
set search_path to summer_camp;

-- A type of room.
create table RoomType (
    roomType varchar(50) primary key
);

-- A type of activity.
create table ActivityType (
    activityType varchar(50) primary key
);

-- A counselours in the summer camp.
create table Counselour (
    cID integer primary key,
    firstName varchar(50) not null,
    lastName varchar(50) not null,
    groupID integer
);

-- The students in the summer camp.
create table Student (
    sID integer primary key,
    firstName varchar(50) not null,
    lastName varchar(50) not null,
    grade integer not null,
    genderType varchar(50) not null,
    groupID integer references Counselour
);

-- All the rooms in the summer camp.
create table Room (
    rID integer primary key,
    roomType varchar(50) not null references RoomType
);

-- The friend preferences for all the students.
create table FriendPreference (
    sID1 integer not null references Student,
    sID2 integer not null references Student,
    isApart bool not null,
    primary key (sID1, sID2),
    check (sID1 > sID2)
);

-- The admin username and password 
create table LoginInfo (
    username varchar(50) primary key,
    password varchar(50) not null 
);

-- This stores the blocked out rooms at a specfic time 
-- specifying the activity that is taking place and 
-- for which group that will be using it. 
create table Blocked (
    startTime time,
    blockedDay char,
    groupID integer references Counselour,
    activityType varchar(50) not null references ActivityType,
    rID integer not null references Room,
    duration interval not null,
    primary key (startTime, blockedDay, groupID)
);