#!/bin/bash

sqls=$(ls sql.d/* | sed "s/sql.d\///g" | xargs)

echo $sqls

read -p "Do you want to remove all dev_sql.d files which is symbolic link? [y/n]" -n 1 -r yesno

dev_sqls=$(ls dev_sql.d/* | sed "s/dev_sql.d\///g" | sed "s/@//g" | xargs)

echo $dev_sqls


if [ $yesno ]; then
    rm -f $(ls -l dev_sql.d | grep -E "^l" | sed -E "s/^l.+?\-> //" | sed "s/sql.d/dev_sql.d/" | xargs)
fi

for sql in $sqls; do
    if printf '%s\n' "$dev_sqls" | grep -q -x "$sql"; then
        echo "sql.d/$sql already exists in dev_sql.d"
    else
        echo "sql.d/$sql does not exist in dev_sql.d"
        echo "Adding sql.d/$sql to dev_sql.d"
        ln -s /sql.d/$sql dev_sql.d/$sql
    fi
done
