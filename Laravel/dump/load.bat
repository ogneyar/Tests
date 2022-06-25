@echo off

rem по умолчанию latin1, но можно задать utf8 или cp1251 например
set ENCODING=utf8

IF "%1" == "" goto ERROR rem dir_name 
IF "%2" == "" goto ERROR rem host_name 
IF "%3" == "" goto ERROR rem database_name 
IF "%4" == "" goto ERROR rem mysql_user 
rem IF "%5" == "" goto ERROR rem [mysql_password] 
IF NOT "%6" == "" ( rem [encoding]
set ENCODING="%6"
)

echo =========================================
echo Load dump database is %1
echo =========================================


mysql -h%2 -u%4 --password=%5 --default-character-set=%ENCODING% %3 < sql\%1\dump.sql

goto END

:ERROR
echo Please, define parameters. Example:
echo load.bat dir_name host_name database_name mysql_user [mysql_password] [encoding]

:END
echo =========================================
echo COMPLITE
echo =========================================

@pause

cls
