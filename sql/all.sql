create database if not exists hua;

use hua;
use hua;

drop table if exists contacts;

create table contacts (
  id int not null primary key auto_increment,
  name varchar(255) not null,
  email varchar(255) not null,
  category varchar(255) not null,
  subject varchar(255) not null,
  message text not null,
  ip varchar(64) not null,
  created_at datetime not null default current_timestamp
);
