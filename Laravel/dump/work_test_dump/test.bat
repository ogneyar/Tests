@echo off

echo =========================================
echo SQL generator
echo =========================================

set ENCODING=latin1

mkdir ..\dumps\test

rem это dump базы naherokubot

echo Generating data for DB: test
mysqldump --host=localhost --password= -u root --result-file=..\dumps\test\dump_data.sql test

echo =========================================
echo Complite
echo =========================================
goto END

echo =================================================
echo ======этопростотексткоторыйневыводится===========
echo =================================================

:END
echo =========================================

@pause

cls