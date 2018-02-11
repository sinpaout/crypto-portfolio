# DB migration

## Setup db with docker(only for first time)
```
docker run --name mydb -e MYSQL_ROOT_PASSWORD=root -p 13306:3306 -d mysql

# install mysql for
brew install mysql

# login to mysql container type `root` for password
mysql -h localhost -P 13306 --protocol=tcp -u root -p

# create `dev` user for app and grant all privilages
mysql> CREATE USER 'dev'@'%' IDENTIFIED BY 'dev';
mysql> GRANT ALL PRIVILEGES ON *.* TO 'monty'@'%' WITH GRANT OPTION;
mysql> FLUSH PRIVILEGES;
mysql> SHOW GRANTS FOR 'admin'@'localhost';
mysql> exit

# Confirm `dev` user able to be login
mysql -h localhost -P 13306 --protocol=tcp -u dev -p
```

## Prepare sequelize-cli for migration
```
# install to global
npm install -g sequelize-cli
```