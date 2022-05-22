import sqlite3
import main

dbname = "Weather.db"

conn = sqlite3.connect(dbname)
cur = conn.cursor()
cur.execute('DROP TABLE IF EXISTS "北海道"')
cur.execute('DROP TABLE IF EXISTS "山口県"')
cur.execute(
    'CREATE TABLE "北海道"(id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING,code STRING,ex_name STRING)'
)
cur.execute('INSERT INTO "北海道"(name,code,ex_name) values("稚内","011000","Wakkanai")')
cur.execute('INSERT INTO "北海道"(name,code,ex_name) values("旭川","012010","Asahikawa")')
cur.execute('INSERT INTO "北海道"(name,code,ex_name) values("留萌","012020","Rumoi")')
cur.execute('INSERT INTO "北海道"(name,code,ex_name) values("札幌","016010","Sapporo")')
cur.execute('INSERT INTO "北海道"(name,code,ex_name) values("岩見沢","016020","Iwamizawa")')
cur.execute('INSERT INTO "北海道"(name,code,ex_name) values("倶知安","016030","kuttyan")')
cur.execute('INSERT INTO "北海道"(name,code,ex_name) values("網走","013010","Abashiri")')
cur.execute('INSERT INTO "北海道"(name,code,ex_name) values("北見","013020","Kitami")')
cur.execute('INSERT INTO "北海道"(name,code,ex_name) values("紋別","013030","Monbetsu")')
cur.execute('INSERT INTO "北海道"(name,code,ex_name) values("根室","014010","Nemuro")')
cur.execute('INSERT INTO "北海道"(name,code,ex_name) values("釧路","014020","Kushiro")')
cur.execute('INSERT INTO "北海道"(name,code,ex_name) values("帯広","014030","Obihiroshi")')
cur.execute('INSERT INTO "北海道"(name,code,ex_name) values("室蘭","015010","Muran")')
cur.execute('INSERT INTO "北海道"(name,code,ex_name) values("浦河","015020","Urakawa")')
cur.execute('INSERT INTO "北海道"(name,code,ex_name) values("函館","017010","Hakodate")')
cur.execute('INSERT INTO "北海道"(name,code,ex_name) values("江差","017020","Esashi")')

cur.execute(
    'CREATE TABLE "山口県"(id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING,code INTEGER,ex_name STRING)'
)
cur.execute('INSERT INTO "山口県"(name,code,ex_name) values("下関","350010","Shimonoseki")')
cur.execute('INSERT INTO "山口県"(name,code,ex_name) values("山口","350020","Yamaguchi")')
cur.execute('INSERT INTO "山口県"(name,code,ex_name) values("柳井","350030","Yanagii")')
cur.execute('INSERT INTO "山口県"(name,code,ex_name) values("萩","350040","Hagi")')
conn.commit()


def FetchCityList(name: str):
    city_list = []
    prefecture_name = name
    conn = sqlite3.connect(dbname)
    cur = conn.cursor()
    cur.execute("SELECT count(*) FROM %s" % name)  # 件数検索
    list = cur.fetchall()
    data_sum = list[0][0]

    cur.execute("SELECT * FROM %s" % name)  # 県名から市のなまえを出力
    list = cur.fetchall()
    for i in range(0, data_sum):
        city_list.append(list[i][1])

    return city_list


def FetchCityData(name: str, name2: str):
    conn = sqlite3.connect(dbname)
    cur = conn.cursor()
    cur.execute(
        "SELECT * FROM %s WHERE name= ? " % name, (name2,)
    )  # 選ばれた市の名前からデータを持ってくる
    list = cur.fetchone()

    sub_id = "{0:06d}".format(list[2])
    sub_name = list[3]

    return sub_id, sub_name
