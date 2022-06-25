@echo off

echo =========================================
echo SQL generator
echo Output files :
echo dump.sql - Data for database
echo =========================================

rem по умолчанию latin1, но можно задать utf8 или cp1251 например
set ENCODING=latin1

IF "%1" == "" goto ERROR rem dir_name 
IF "%2" == "" goto ERROR rem host_name 
IF "%3" == "" goto ERROR rem database_name 
IF "%4" == "" goto ERROR rem mysql_user 
rem IF "%5" == "" goto ERROR rem [mysql_password] 
IF NOT "%6" == "" ( rem [encoding]
set ENCODING="%6"
)

mkdir sql\%1

goto get

:get
echo Generating data for DB: %3
mysqldump --host=%2 --password=%5 -u %4 --disable-keys --default-character-set=%ENCODING% --extended-insert=false --result-file=sql\%1\dump.sql %3
goto END

:ERROR
echo Please, define parameters. Example:
echo dump.bat dir_name host_name database_name mysql_user [mysql_password] [encoding]
goto END

:END
echo =========================================

@pause