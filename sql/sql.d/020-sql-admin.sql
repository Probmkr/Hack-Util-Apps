create table if not exists sql_admin_users (
  id serial primary key,
  username varchar(255) not null,
  password varchar(255) not null
);

create table if not exists sql_admin_sessions (
  id serial primary key,
  user_id bigint unsigned not null,
  session_token varchar(255) not null,
  expires datetime not null
);

alter table sql_admin_users
  modify column id serial,
  modify column username varchar(255) not null,
  modify column password varchar(255) not null;

alter table sql_admin_sessions
  modify column id serial,
  modify column user_id bigint unsigned not null,
  modify column session_token varchar(255) not null,
  modify column expires datetime not null;

