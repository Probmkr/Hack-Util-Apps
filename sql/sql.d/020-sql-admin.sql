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

