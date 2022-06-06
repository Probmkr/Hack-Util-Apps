create database if not exists hua;

use hua;
drop table if exists contacts;

create table contacts (
  id int unsigned not null primary key auto_increment,
  name varchar(255) not null,
  email varchar(255) not null,
  category varchar(255) not null,
  subject varchar(255) not null,
  message text not null,
  ip varchar(63) not null,
  created_at datetime not null default current_timestamp
);
drop table if exists sql_admin_users;
drop table if exists sql_admin_sessions;

create table sql_admin_users (
  id serial primary key,
  username varchar(255) not null,
  password varchar(255) not null
);

create table sql_admin_sessions (
  id serial primary key,
  user_id bigint unsigned not null,
  session_token varchar(255) not null,
  expires datetime not null
);

create table sql_admin_login_cooldowns (
  id serial primary key,
  ip varchar(63) not null,
  expires datetime not null
);
