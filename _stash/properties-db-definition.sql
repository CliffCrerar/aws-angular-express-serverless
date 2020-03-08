drop table if exists property_memo;
drop table if exists property;
drop table if exists contact;
drop table if exists contact_type;
drop table if exists property_type;
drop table if exists estate;
drop table if exists address;


create table address(
	addressid serial primary key,
	unit smallint not null,
	suite_street varchar(56) not null,
	postal varchar(32) not null,
	suburb varchar(128) not null,
	city varchar(128) not null,
	region varchar(128) not null,
	country varchar(128) not null,
	coordinate varchar(128) null,
	created timestamp with time zone default CURRENT_TIMESTAMP
);

drop table if exists estate;
create table estate(
	estateid serial primary key,
	estatename varchar(64)
);

create table contact_type(
	contacttypeid serial primary key,
	contacttype varchar (32)
);

create table contact(
	contactid serial primary key,
	contacttypeid int references contact_type(contacttypeid),
	firstname varchar(24) not null,
	lastname varchar(24) not null,
	domicile int references address(addressid),
	email varchar(128) not null,
	tell varchar(32),
	cell varchar(32),
	created timestamp with time zone default CURRENT_TIMESTAMP
);

create table property_type (
	propertytypeid serial primary key,
	propertytype varchar(64)
);

create table property (
	PropertyId serial primary key,
	titledeedno	varchar(24) unique,
	ownerId	int references contact(contactid) on update cascade,
	estateId int references estate(estateId) on update cascade,
	addressId int references address(addressid) on update cascade,
	residentId int references contact(contactid) on update cascade,
	propertyTypeId int references property_type(propertytypeid) on update cascade,
	created timestamp with time zone default CURRENT_TIMESTAMP
);

create table property_memo(
	propertymemoId serial primary key,
	PropertyId int references property(propertyid),
	memo text not null,
	created timestamp with time zone default CURRENT_TIMESTAMP
);

-- ADDRESS

insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('148','street_suite','511647','Fairmount Heights','Vienna','Wie','Iran','54.83566, -178.18826');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('19','8423 Eget, Ave','61-330','St. Joseph','Minatitlán','Veracruz','Lebanon','21.34024, 8.29502');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('407','Ap #474-152 Non Rd.','70632','Stayton','Olinda','Pernambuco','Isle of Man','-30.36326, -16.81214');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('436','394-9521 Adipiscing St.','71542','Roseau','Mielec','PK','Svalbard and Jan Mayen Islands','73.87014, 162.08479');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('105','P.O. Box 342, 9686 Vestibulum Avenue','48396','Blue River','Lima','LIM','Svalbard and Jan Mayen Islands','-23.4621, -83.05492');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('106','Ap #289-5756 Neque St.','10207','Reubens','Barcelona','CA','Colombia','21.24785, -131.37747');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('155','1619 Nisl. Av.','25208','Newtonia','Loralai','BL','Thailand','-2.09483, 40.51045');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('215','3938 In, Av.','14114','Interlachen','Saint-Marc','NA','Bhutan','84.32949, -15.49189');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('311','Ap #982-3276 Orci, Street','1293 QS','Dry Ridge','Carmen de Bolivar','Bolívar','Mauritania','-2.14822, 8.67857');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('251','P.O. Box 133, 5100 Diam Avenue','860641','Maben','Honolulu','HI','Suriname','-70.40194, -97.26056');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('2','681-2528 Fringilla St.','30892','Sauk Centre','Shaftesbury','Dorset','Maldives','-31.88536, 53.4956');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('54','Ap #591-8628 Torquent Ave','11-143','Ecorse','L Hospitalet de Llobregat','CA','Guyana','33.23371, -80.75534');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('333','4804 Integer Avenue','D15 9WF','The Plains','Qambar Shahdadkot','SI','Paraguay','55.88393, 14.98222');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('6','P.O. Box 532, 8360 Neque. St.','56-756','New Florence','Fort Collins','CO','Taiwan','-87.39392, 178.69946');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('353','269-961 Diam. Rd.','46250','Igiugig','Jammu','JK','Gabon','-5.61953, 86.90168');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('274','P.O. Box 561, 9190 Non St.','749898','Wauregan','Rea','LOM','Portugal','46.77178, -77.05841');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('82','1592 Euismod St.','418779','Fairview Shores','São Gonçalo','Rio de Janeiro','United States','63.71751, 150.99938');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('233','319-374 Orci Rd.','59399','Centerton','Greater Sudbury','ON','Somalia','-14.04621, -153.18285');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('257','1725 Dis Road','64227','Grantsville','Vladimir','VLA','Lesotho','-7.31676, -40.99881');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('418','900-5930 Eu Avenue','M6B 1T5','Glen Osborne','Dandenong','Victoria','Angola','-32.31744, 145.34273');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('478','P.O. Box 174, 5583 Ipsum Street','6985','Cohassett Beach','Middelburg','Zl','Pitcairn Islands','-36.72899, 72.11366');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('476','4339 Cras Road','9280','Ocracoke','Batu','JI','Dominican Republic','50.2569, -140.32953');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('60','P.O. Box 589, 1270 Vitae, Av.','6478','Green Bluff','Skardu','GB','Slovakia','53.89887, 178.29926');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('31','2595 Felis. Street','49-679','Tellico Plains','Gangneung','Gangwon','Fiji','-58.82772, 133.55195');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('278','Ap #197-4609 Ullamcorper, Ave','52485','Avon Lake','Hudiksvall','Gävleborgs län','Cook Islands','19.24596, -96.05823');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('249','Ap #238-2316 Magnis Avenue','11687','Toad Hop','Galway','Connacht','Guinea-Bissau','0.94806, 126.92588');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('120','P.O. Box 782, 236 Pharetra Av.','1156 EV','Leesburg','Cork','M','South Sudan','-41.03895, 44.67377');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('160','P.O. Box 466, 515 Non, Rd.','987523','Rader Creek','Castlegar','British Columbia','United Arab Emirates','-7.66939, -18.18652');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('390','1899 Consequat St.','8884 HA','Harrison City','Independence','Missouri','South Sudan','-22.82443, -175.06611');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('92','369-7848 A, Rd.','43627','Prattville','Alajuelita','San José','French Southern Territories','-17.53683, -94.52423');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('497','Ap #958-8544 Lobortis Ave','971763','Commodore','Draguignan','PR','Syria','18.81316, -42.55329');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('264','819-8216 Faucibus Avenue','17713','Rib Lake','Belfast','U','Zambia','-10.09275, -59.185');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('220','P.O. Box 735, 5254 Purus Street','9351','Finesville','Rattray','Perthshire','Switzerland','11.53126, 69.10968');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('312','Ap #486-6078 Arcu. Street','Z2 2FA','Conway Springs','Campbelltown','NSW','Marshall Islands','-66.93634, 114.39486');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('278','7590 Mi Rd.','3481','Neuse Forest','Rockingham','Western Australia','Botswana','77.88993, -12.8343');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('180','P.O. Box 517, 4050 Nisl Avenue','9591','Maxeys','Semarang','JT','Antarctica','6.83296, -143.44803');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('383','P.O. Box 612, 9198 Enim Ave','4948','Allegan','Berlin','BE','Saint Helena, Ascension and Tristan da Cunha','-48.59385, 15.659');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('217','P.O. Box 496, 3389 Nunc St.','488','Escalon','Mount Pearl','Newfoundland and Labrador','Turkey','81.65811, -175.70007');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('434','P.O. Box 108, 6204 Risus Ave','87-091','Shamokin Dam','Istanbul','Ist','Niger','50.82906, 173.52046');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('229','5296 Malesuada. Av.','60955','Walls','Yekaterinburg','Sverdlovsk Oblast','Vanuatu','77.91266, 68.58346');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('409','957-8728 Mattis St.','28312','Angus','Gaspé','QC','China','-78.20636, 121.43902');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('73','8534 Enim. St.','74438','Pheasant Run','Greenlaw','BE','Hong Kong','-58.06755, -87.89583');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('481','8795 Arcu. St.','52009','Sumner','Mantova','Lombardia','Cook Islands','87.37229, 20.19514');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('75','2090 Aliquam Rd.','33259','Fleischmanns','Pierrefonds','QC','Tanzania','-67.21354, 48.7694');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('355','P.O. Box 337, 1707 Auctor, Road','4028','Michiana','Vienna','Wie','Thailand','43.37645, -93.7194');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('172','P.O. Box 452, 7695 Pede Ave','Z4244','West Newton','Göteborg','O','Poland','8.71043, -166.08453');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('422','Ap #863-4612 Metus Rd.','8388','Patchogue','Raj Nandgaon','Chhattisgarh','Guadeloupe','73.48341, -18.53201');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('349','P.O. Box 654, 5410 Diam Ave','864190','Lake Summerset','Turbo','ANT','Afghanistan','59.2771, 28.14833');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('430','9636 Vel Av.','5221','Hiwassee','Bansberia','WB','Cyprus','-68.22888, 176.14853');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('429','9897 Blandit Ave','659231','Fairmount Heights','Medellín','Antioquia','Togo','-51.64381, -140.93088');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('485','Ap #527-3470 Odio, Ave','856437','St. Joseph','Thionville','LO','Cayman Islands','58.50991, -122.34232');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('53','Ap #716-9594 Molestie St.','218749','Stayton','Tyumen','TYU','Gabon','-61.25578, -84.58018');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('114','Ap #271-7085 Blandit Avenue','99854-88392','Roseau','Leverkusen','NW','San Marino','-33.41325, 161.3658');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('491','6104 Et Rd.','64509','Blue River','Ulloa (Barrial)','Heredia','Romania','34.48118, -130.36883');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('74','P.O. Box 738, 8554 Ornare. Av.','L51 7FN','Reubens','Sacheon','South Gyeongsang','Belgium','-79.00714, -174.47941');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('27','9618 Quam. Street','32-732','Newtonia','Sapele','Delta','Bosnia and Herzegovina','-18.52527, -154.96956');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('74','P.O. Box 642, 6770 Dis Avenue','8350','Interlachen','Gijón','AS','Pitcairn Islands','0.75871, -0.19083');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('203','P.O. Box 995, 6257 Consectetuer Avenue','694472','Dry Ridge','Bergama','İzmir','Libya','-63.46527, -45.07166');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('227','7812 In, St.','4998','Maben','Ghaziabad','Uttar Pradesh','Papua New Guinea','17.81577, -160.50904');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('298','P.O. Box 250, 2643 Lobortis Street','882574','Sauk Centre','Rajanpur','Punjab','Panama','62.30802, 151.59781');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('270','P.O. Box 345, 1867 Tincidunt St.','209157','Ecorse','São João de Meriti','Rio de Janeiro','Grenada','69.81774, -163.27978');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('318','995-3988 Vestibulum. Street','472965','The Plains','Gonda','Uttar Pradesh','Montserrat','-10.67083, -148.30854');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('246','P.O. Box 998, 3874 Aliquet Rd.','0240 LJ','New Florence','Cleveland','OH','Saint Kitts and Nevis','13.4109, 27.05626');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('135','4056 Vitae Av.','63047','Igiugig','Mogi das Cruzes','SP','American Samoa','0.76497, -82.65144');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('210','9648 Et Rd.','38482','Wauregan','Płock','MA','Venezuela','27.07297, 32.31601');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('112','P.O. Box 133, 3102 Enim. Street','550162','Fairview Shores','Dubuisson','Quebec','Djibouti','-66.57701, 88.46696');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('357','4473 Nunc St.','77905','Centerton','Bremen','Bremen','Thailand','-15.34783, 86.66274');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('120','P.O. Box 714, 2428 Ut Avenue','3152 OU','Grantsville','Ansan','Gyeonggi','British Indian Ocean Territory','-43.52533, -142.77144');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('331','1899 Leo. Av.','E6G 4E0','Glen Osborne','Sargodha','SI','United Arab Emirates','-36.83441, -51.27707');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('196','503-6861 Risus, Ave','5063','Cohassett Beach','Reus','CA','Palestine, State of','59.56323, -168.12553');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('159','P.O. Box 611, 207 Orci St.','837070','Ocracoke','Gojal Upper Hunza','GB','Swaziland','-42.26289, -38.03072');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('60','418-758 Ut Rd.','8670','Green Bluff','Jönköping','F','China','31.94829, 110.97109');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('57','160-8481 Duis St.','29797-576','Tellico Plains','Shangla','Khyber Pakhtoonkhwa','United Kingdom (Great Britain)','-50.15558, 162.42018');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('417','Ap #668-4775 Dui Av.','67528-72229','Avon Lake','Alajuelita','San José','Brazil','-80.99023, -143.47602');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('414','Ap #234-6818 Posuere Avenue','5761','Toad Hop','Atlanta','Georgia','Liberia','50.56856, 153.67952');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('65','Ap #226-1267 Cras Av.','9839','Leesburg','Sakhalin','Sakhalin Oblast','United States Minor Outlying Islands','55.11649, -75.7556');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('464','Ap #211-8378 Lacinia Rd.','45900-84711','Rader Creek','Waterloo','Waals-Brabant','Czech Republic','-85.14536, 162.22543');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('344','Ap #364-9716 Sed Rd.','C3N 3JR','Harrison City','Rawalpindi','Punjab','Monaco','32.06753, -161.26052');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('95','4379 Enim Rd.','2062','Prattville','Redcliffe','QLD','Albania','-16.3249, 52.95084');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('72','2958 Sed Street','31664','Commodore','Wodonga','Victoria','Mali','15.58614, -115.75619');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('264','9321 Ligula Rd.','684540','Rib Lake','Governador Valadares','Minas Gerais','Greenland','16.06932, -60.17062');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('500','P.O. Box 242, 3799 Phasellus Road','56433','Finesville','Owen Sound','Ontario','Rwanda','-50.0836, -123.85472');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('461','Ap #872-9500 Quam St.','32291','Conway Springs','Warszawa','MA','Kyrgyzstan','-24.89015, 68.00162');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('114','P.O. Box 742, 3398 Integer Street','1789','Neuse Forest','Cartagena','Murcia','Dominican Republic','76.83694, -43.32642');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('77','Ap #535-3403 Risus St.','Z8082','Maxeys','Glauchau','SN','Morocco','79.25515, -86.66898');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('165','362-7446 Velit Street','2763','Allegan','Profondeville','NA','Ghana','80.51575, -91.31604');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('360','P.O. Box 317, 6452 Augue Street','X4 6WG','Escalon','Bydgoszcz','KP','Australia','23.34409, -120.42685');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('313','Ap #756-6363 Adipiscing St.','5584','Shamokin Dam','Laramie','WY','Liberia','60.55882, -74.93355');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('154','P.O. Box 872, 1924 Duis Road','71814','Walls','Xalapa','Ver','Dominica','-68.68063, 86.69584');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('101','P.O. Box 750, 1270 Ligula Rd.','15849','Angus','Judenburg','Styria','Sint Maarten','-46.59645, 132.93764');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('94','P.O. Box 925, 3765 Luctus Avenue','79739','Pheasant Run','Birecik','Şan','Malaysia','-28.02245, -31.73001');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('364','P.O. Box 394, 7091 Iaculis, Street','372094','Sumner','Créteil','Île-de-France','Curaçao','-29.67188, 34.4423');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('316','398-6259 Est St.','866966','Fleischmanns','Tarma','Junín','Costa Rica','-65.66862, 53.03111');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('444','P.O. Box 836, 9281 Vitae Rd.','85993-60020','Michiana','Corral','XIV','China','-2.56302, -64.54927');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('181','P.O. Box 615, 7892 Elementum, Av.','67513','West Newton','Scarborough','Ontario','Peru','17.49362, 39.25143');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('453','Ap #958-9316 Lectus Rd.','76492','Patchogue','Banjar','West Java','Mauritius','65.35756, 156.45699');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('282','3001 Morbi Road','86157-173','Lake Summerset','Haarlem','N.','Gabon','-55.70921, -101.35317');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('263','188-2166 Auctor, St.','31302','Hiwassee','Shimanovsk','Amur Oblast','Vanuatu','-83.29212, 123.43935');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('261','9924 Neque. Av.','92106-085','Rib Lake','Tula','TUL','Bonaire, Sint Eustatius and Saba','-10.92914, -173.75213');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('126','557-911 Fermentum Street','439759','Finesville','Cherepovets','Vologda Oblast','Bangladesh','-12.26, 28.37933');
insert into address(unit,suite_street,postal,suburb,city,region,country,coordinate) values('363','4882 Lorem Avenue','','','','','','-12.26, 28.37933');

-- contact

insert into contact_type(contacttype) values ('Tenant'),('Owner');

-- estate

insert into estate(estatename)
values
	('abodial'),
	('develocus'),
	('revohouse'),
	('habitibility'),
	('exoterior'),
	('provident street'),
	('Mayfair Road');

-- contact

insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Hector','Lynn','88','lacus@ullamcorpermagna.com','(218) 499-8336','0800 1111');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Meredith','Mack','73','ut@auctorullamcorper.net','(297) 265-1581','0800 1111');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Tyrone','Bowman','42','Praesent.luctus.Curabitur@gravidamauris.ca','(795) 743-7657','0845 46 49');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('2','Yael','Chambers','75','metus.In.lorem@enimmitempor.net','(778) 688-0372','(0131) 542 1525');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('2','Alden','Johnston','24','Duis@adipiscing.ca','(501) 142-2916','0879 549 7175');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('2','Jolene','Ratliff','7','aliquet.sem.ut@etmagnis.ca','(419) 690-8475','(01198) 71716');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Rajah','Jefferson','43','erat.vel.pede@ultrices.edu','(506) 727-3015','(0111) 767 6716');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('2','Chiquita','Kemp','36','lacus.Ut@congue.ca','(829) 613-7418','055 5578 3341');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('2','Raymond','Macdonald','25','Sed.diam.lorem@arcu.ca','(250) 494-9182','0800 290 6215');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Herrod','Woodward','32','ornare.tortor.at@dolordolortempus.net','(216) 249-0153','0800 021 8978');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('2','Gwendolyn','Ferrell','4','aliquet@elitsedconsequat.org','(485) 698-4989','0950 890 3730');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Aaron','Beach','26','elit.fermentum.risus@sit.co.uk','(382) 723-3348','056 3287 3857');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Griffith','Hurley','76','In.ornare@euaugueporttitor.com','(562) 904-4700','(016977) 1230');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Rashad','Carney','92','velit@egestashendreritneque.co.uk','(865) 891-8809','0500 847350');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('2','Lynn','Mosley','65','accumsan.convallis@semper.com','(386) 617-0063','0500 728788');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Chaney','Huff','11','Nunc@libero.co.uk','(207) 382-2860','0845 46 42');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Genevieve','Mcknight','3','imperdiet.ullamcorper@risusvarius.org','(368) 106-0635','(0110) 407 0336');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Ezra','Briggs','42','Duis.a.mi@eget.co.uk','(533) 816-5085','(016977) 1223');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Tatiana','Durham','27','ridiculus.mus@augueporttitorinterdum.edu','(170) 349-6430','0950 231 1709');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('2','Harper','Pugh','11','eu.ligula@tristique.com','(940) 798-1359','(0191) 382 7417');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Yeo','Glass','94','erat@a.edu','(960) 298-8451','0800 1111');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('2','Ivy','Romero','99','tortor@amalesuada.com','(839) 415-4400','0800 1111');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('2','Halla','Maldonado','53','et.euismod@posuere.org','(216) 311-4916','056 6912 4111');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Emily','Shields','58','dolor@sedleo.ca','(710) 157-1125','0300 326 9449');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('2','Signe','Holden','42','Aliquam@venenatis.com','(795) 949-9624','0845 46 45');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Madeson','Cash','54','mauris.Integer@anteVivamusnon.net','(241) 838-2855','0800 052 2884');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('2','Raya','Eaton','46','nibh@etlaciniavitae.net','(871) 561-6556','0902 607 7767');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('2','Erich','Frye','94','nec.leo@eueuismodac.co.uk','(375) 109-1314','076 0130 8194');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('2','Dolan','Michael','70','ipsum.primis@maurissitamet.ca','(221) 654-6402','0800 1111');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('2','Jael','English','95','sem@blanditenim.edu','(274) 947-9642','(016977) 4774');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Emi','Fry','76','feugiat.metus.sit@nasceturridiculusmus.com','(888) 906-0468','07567 152307');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Elaine','Richmond','88','dui.augue@Phasellus.net','(313) 722-8294','(0118) 117 8148');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('2','Wesley','Mann','46','ullamcorper.nisl.arcu@duiin.ca','(613) 969-9301','0800 124 7818');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Deacon','Hendrix','4','erat.in@utpharetra.org','(787) 263-4340','076 3361 7803');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('2','Walter','Maxwell','70','tincidunt.pede@anteipsum.edu','(284) 989-3885','055 4224 6843');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Jacqueline','Mcfarland','9','blandit.Nam.nulla@orci.edu','(661) 739-3665','(011502) 15266');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Lana','Fulton','14','facilisis.lorem.tristique@egestasurna.co.uk','(645) 801-0794','(016977) 3698');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('2','Skyler','Stanley','29','sodales.purus@ornarelibero.com','(616) 299-0138','0921 090 4809');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('2','Azalia','Gilbert','85','nisl@vulputateullamcorpermagna.ca','(765) 409-8286','0800 830 1986');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('2','Dawn','Marshall','81','Nullam.suscipit.est@ultricesposuere.edu','(746) 460-2864','0800 961 8338');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Mikayla','Stanley','66','interdum.Curabitur@aarcuSed.ca','(697) 279-4995','(027) 6711 7343');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Elliott','West','80','dictum.ultricies@malesuadafringillaest.net','(611) 195-9387','0983 578 4019');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('2','Mariam','Duffy','54','malesuada.fames.ac@In.com','(522) 780-1121','(01097) 01436');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Yael','Ramsey','38','ornare.facilisis@dignissimmagnaa.net','(542) 236-6850','0800 658 7361');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Kirby','Tyler','77','faucibus.leo@nonantebibendum.org','(871) 136-5428','(016977) 0343');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Sean','Gross','48','mauris@leo.co.uk','(336) 268-7841','070 1434 4353');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Ifeoma','Dodson','7','Nunc.mauris.Morbi@eleifendnecmalesuada.org','(448) 118-6367','07624 510524');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('2','Oren','Kemp','39','semper@nec.net','(327) 816-5847','(017597) 15943');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Cally','Hodge','19','rhoncus.Nullam@arcuVivamussit.ca','(106) 210-0291','056 3865 4219');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('1','Moana','Juarez','96','Morbi@CuraeDonectincidunt.com','(267) 663-8429','(0151) 827 0039');
insert into contact(contacttypeid,firstname,lastname,domicile,email,cell,tell) values('2','Sara','Fischer','93','Aliquam@odio.net','(588) 687-3506','055 0519 5171');

-- property type

insert into property_type(propertytype) values
('Free Standing Residents'),
('Boundried Estate'),
('Free Standing Townhouse'),
('Unboundried Duet'),
('Boundried Duet'),
('Duplex'),
('Apartment'),
('Loft Apartment');

-- property

insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Ferrell/Gwendolyn-5118','25','4','42','19','2');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Zimmerman/Carolyn-503','5','3','84','49','3');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Obrien/Leonard-4864','5','6','45','21','1');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Woodward/Herrod-4880','17','3','27','36','4');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Huff/Chaney-7306','44','5','68','38','3');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Pugh/Harper-3042','28','4','81','47','7');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Huff/Chaney-8709','38','5','27','4','3');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Gilliam/Iris-9598','17','5','76','41','1');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Santiago/Illana-8499','30','5','2','8','5');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Glass/Yeo-1259','3','6','74','9','5');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Pugh/Harper-7077','27','2','88','6','7');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Fischer/Sara-9496','23','7','20','49','1');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Hernandez/Armand-9329','18','6','58','8','3');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Alford/Nichole-1224','25','6','64','20','1');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Carney/Rashad-6472','17','1','91','46','3');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Mosley/Lynn-2799','49','5','11','41','7');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Arnold/Ramona-9618','2','7','67','34','5');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Woodward/Herrod-9238','40','4','84','20','3');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Jefferson/Rajah-6103','42','1','19','38','5');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Landry/Brett-9022','24','6','49','17','7');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Weiss/Mariam-481','17','7','22','24','5');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Vargas/Serina-2098','8','7','2','16','4');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('English/Jael-1951','9','5','83','7','5');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Bowman/Tyrone-4854','39','5','94','7','1');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Wong/Alika-1461','35','7','33','23','6');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Richardson/Knox-8072','13','4','78','9','3');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Santiago/Illana-7085','30','3','80','42','1');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Fischer/Sara-67','37','1','60','32','7');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Fulton/Lana-5444','30','6','83','47','1');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Kramer/Hilda-8378','11','1','98','35','6');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Beck/Dale-8761','5','4','32','41','7');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Johnston/Alden-6554','14','5','81','2','7');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Harrington/Carol-5042','2','5','39','42','2');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Johnston/Alden-3221','20','7','70','47','1');
insert into property(titledeedno,ownerId,estateId,addressId,residentId,propertyTypeId) values('Maldonado/Halla-5694','9','3','50','49','3');

-- CREATE OR REPLACE FUNCTION calctitledeed()
-- RETURNS trigger
-- LANGUAGE plpgsql
-- SECURITY DEFINER
-- AS $BODY$
-- BEGIN

-- END
-- $BODY$;

-- drop trigger if exists titledeedgen;
-- CREATE TRIGGER titledeedgen
-- after INSERT
-- ON property
-- FOR EACH ROW
-- EXECUTE PROCEDURE calctitledeed();
