import sqlite3
import main

dbname = 'Weather.db'


conn = sqlite3.connect(dbname)
cur = conn.cursor()

# cur.execute('CREATE TABLE Yamaguchi(id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING,code INTEGER,ex_name STRING)')
# cur.execute('INSERT INTO Yamaguchi(name,code,ex_name) values("下関",350010,"Shimonoseki")')
# cur.execute('INSERT INTO Yamaguchi(name,code,ex_name) values("山口",350020,"Yamaguchi")')
# cur.execute('INSERT INTO Yamaguchi(name,code,ex_name) values("柳井",350030,"Yanagii")')
# cur.execute('INSERT INTO Yamaguchi(name,code,ex_name) values("萩",350040,"Hagi")')
conn.commit()


name = "下関"
cur.execute('SELECT * FROM Yamaguchi WHERE name= ? ',(name,))

list = cur.fetchone()

sub_id = list[2]
sub_name = list[3]