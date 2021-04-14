--CREATE USER name [[WITH] option [...]]
--option list
--	SUPERUSER | NOSUPERUSER		: SUPERUSER 여부, 기본값 NOSUPERUSER
--	CREATEDB | NOCREATEDB		: DB 생성 권한, 기본값 NOCREATEDB
--	CREATEUSER | NOCREATEUSER	: 사용자 생성 권한, 기본값 NOCREATEUSER
--	PASSWORD '{password}'		: 비밀번호 설정

-- 사용자 조회 쿼리
-- SELECT * FROM FROM PG_USER;

-- 계정 Role 권한 추가
-- ALTER ROLE [userid] [rolename] ... [rolename];
-- ex) ALTER ROLE nope SUPERUSER CREATEDB ...;

-- 계정 비밀번호 설정
-- ALTER USER [userid] WITH PASSWORD '[password]';

--CREATE TABLESPACE {name} LOACTION '{path}';

--CREATE DATABASE '{name}' [[WITH] [OWNER[=]user_name]];
--	OWNER				: DB Owner
--	TEMPLATE			: DB TEMPLATE에 의해 생성될 때 TEMPLATE 이름, 기본값 template1
--	ENCODING			: DATA ENCODING 방법 / 지정시 LC_CTYPE, LC_COLLATE VALUE와 연계되기에 주의
--	LC_COLLATE			: String Data를 기준으로 정렬할 때 정렬 기준, 기본값 ko_KR.UTF-8 ex) ko_KR.UTF-8은 기본적으로 한글 기준으로 정렬하되 한글 이외 문자는 UTF-8에 의해 정렬함
--	LC_CTYPE			: 대소문자, 숫자 등과 같은 문자 분류를 위한 설정
--	TABLESPACE			: Table Space를 임의로 설정할 때 사용
--	ALLOW_CONNECTIONS	: 외부 접속 가능 여부
--	CONNECTION LIMIT	: DB 접속 제한 설정
--	IS_TEMPLATE			: DB Template 인지 여부 설정

-- linux : chown postgres:postgres /home/postgres

CREATE USER nope PASSWORD 'nope' NOSUPERUSER CREATEDB NOCREATEUSER;
CREATE TABLESPACE tblnope location '/home/postgres/nope_tblspace';
CREATE DATABASE nopetable OWNER nope TABLESPACE tblnope;