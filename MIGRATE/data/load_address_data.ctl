--control FILE
load data
infile 'C:\Users\Public\Documents\oracle_migration\migrations\Address.csv'
truncate into table ADDRESS
fields terminated by ","
(
	  ADDRESS_ID
	, STREET
	, STREET_NUMBER
	, CITY
	, ZIP
	, COUNTRY
)