create table if not exists contact_categories (
  category_id serial primary key,
  category_code varchar(255) not null,
  category_name_ja varchar(255) not null,
  category_name_en varchar(255) not null
);

alter table contact_categories
  modify column category_id serial,
  modify column category_code varchar(255) unique not null,
  modify column category_name_ja varchar(255) not null,
  modify column category_name_en varchar(255) not null;

insert into contact_categories (category_code, category_name_ja, category_name_en) values (
  'others',
  'その他',
  'others'
), (
  'bug',
  'バグ',
  'bug'
), (
  'suggesting',
  '改善案',
  'suggesting'
), (
  'complaint',
  '苦情',
  'complaint'
), (
  'question',
  '質問',
  'question'
);

create table if not exists contacts (
  id int serial primary key,
  name varchar(255) not null,
  email varchar(255) not null,
  category_id bigint unsigned not null,
  subject varchar(255) not null,
  message text not null,
  ip varchar(63) not null,
  created_at datetime not null default current_timestamp,
  foreign key (category_id) references contact_categories (category_id)
);

alter table contacts
  modify column id int unsigned not null auto_increment,
  modify column name varchar(255) not null,
  modify column email varchar(255) not null,
  modify column category_id bigint unsigned not null,
  modify column subject varchar(255) not null,
  modify column message text not null,
  modify column ip varchar(63) not null,
  modify column created_at datetime not null default current_timestamp;
