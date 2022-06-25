@echo off

echo =========================================
echo Load dump database
echo =========================================

rem выгрузка данных из dump'а в localhost

mysql -uroot -h127.0.0.1 --password= testerbotoff < ..\dumps\test\dump_data.sql

echo =========================================
echo COMPLITE
echo =========================================

@pause