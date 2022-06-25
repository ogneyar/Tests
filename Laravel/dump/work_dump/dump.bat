@echo off

echo =========================================
echo SQL generator
echo Output files :
echo dump_scheme.sql - Scheme of database
echo dump_data.sql - Data for database
echo =========================================

rem по умолчанию latin1, но можно задать utf8 или cp1251 например
set ENCODING=latin1

IF "%1" == "" goto ERROR
IF "%2" == "" goto ERROR
IF "%3" == "" goto ERROR
rem IF "%4" == "" goto ERROR
IF NOT "%5" == "" (
set ENCODING="%5"
)

mkdir dump

goto get

:get
echo Generating scheme for DB: %1
mysqldump --host=%1 --password=%4 -u %3 --disable-keys --add-drop-table --default-character-set=%ENCODING% --no-data --result-file=dump\dump_scheme.sql %2

echo Generating data for DB: %1
mysqldump --host=%1 --password=%4 -u %3 --disable-keys --default-character-set=%ENCODING% --no-create-info --extended-insert=false --result-file=dump\dump_data.sql %2
goto END

:ERROR
echo Please, define parameters. Example:
echo dump.bat host_name database_name mysql_user mysql_password [encoding]
goto END

:END
echo =========================================

@pause