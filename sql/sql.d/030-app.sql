create table if not exists apps (
  app_id serial primary key,
  app_code varchar(255) not null,
  app_name_ja varchar(255) not null,
  app_name_en varchar(255) not null,
  app_url text not null,
  description_ja text,
  description_en text,
  created_at datetime not null default current_timestamp
);

alter table apps
  modify column app_id serial,
  modify column app_code varchar(255) not null,
  modify column app_name_ja varchar(255) not null,
  modify column app_name_en varchar(255) not null,
  modify column app_url text not null,
  modify column description_ja text,
  modify column description_en text,
  modify column created_at datetime not null default current_timestamp;

create table if not exists app_tags (
  tag_id serial primary key,
  tag_name varchar(255) not null
);

create table if not exists app_tag_combines (
  app_id bigint unsigned not null,
  tag_id bigint unsigned not null,
  foreign key (app_id) references apps (app_id),
  foreign key (tag_id) references app_tags (tag_id)
);

alter table app_tags
  modify column tag_id serial,
  modify column tag_name varchar(255) not null;

alter table app_tag_combines
  modify column app_id bigint unsigned not null,
  modify column tag_id bigint unsigned not null;

create table if not exists app_categories (
  category_id serial primary key,
  category_name varchar(255) not null,
  parent_id bigint unsigned
);

create table if not exists app_category_combines (
  app_id bigint unsigned not null,
  category_id bigint unsigned not null,
  foreign key (app_id) references apps (app_id),
  foreign key (category_id) references app_categories (category_id)
);

alter table app_categories
  modify column category_id serial,
  modify column category_name varchar(255) not null,
  modify column parent_id bigint unsigned;

alter table app_category_combines
  modify column app_id bigint unsigned not null,
  modify column category_id bigint unsigned not null;
