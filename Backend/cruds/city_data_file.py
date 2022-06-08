import sqlite3
import main

dbname = "Weather.db"

conn = sqlite3.connect(dbname)
cur = conn.cursor()
cur.execute('DROP TABLE IF EXISTS "北海道"')
cur.execute('DROP TABLE IF EXISTS "青森県"')
cur.execute('DROP TABLE IF EXISTS "岩手県"')
cur.execute('DROP TABLE IF EXISTS "宮城県"')
cur.execute('DROP TABLE IF EXISTS "秋田県"')
cur.execute('DROP TABLE IF EXISTS "山形県"')
cur.execute('DROP TABLE IF EXISTS "福島県"')
cur.execute('DROP TABLE IF EXISTS "茨城県"')
cur.execute('DROP TABLE IF EXISTS "栃木県"')
cur.execute('DROP TABLE IF EXISTS "山口県"')
cur.execute('DROP TABLE IF EXISTS "福岡県"')
cur.execute('DROP TABLE IF EXISTS "熊本県"')
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

cur.execute(
    'CREATE TABLE "青森県"(id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING,code INTEGER,ex_name STRING)'
)
cur.execute('INSERT INTO "青森県"(name,code,ex_name) values("青森","020010","Aomori")')
cur.execute('INSERT INTO "青森県"(name,code,ex_name) values("むつ","020020","Mutsu")')
cur.execute('INSERT INTO "青森県"(name,code,ex_name) values("八戸","020030","Yae")')

cur.execute(
    'CREATE TABLE "岩手県"(id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING,code INTEGER,ex_name STRING)'
)
cur.execute('INSERT INTO "岩手県"(name,code,ex_name) values("盛岡","030010","Morioka")')
cur.execute('INSERT INTO "岩手県"(name,code,ex_name) values("宮古","030020","Miyako")')
cur.execute('INSERT INTO "岩手県"(name,code,ex_name) values("大船渡","030030","Oofunato")')

cur.execute(
    'CREATE TABLE "宮城県"(id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING,code INTEGER,ex_name STRING)'
)
cur.execute('INSERT INTO "宮城県"(name,code,ex_name) values("仙台","040010","Sendai")')
cur.execute('INSERT INTO "宮城県"(name,code,ex_name) values("白石","040020","Shiroishi")')

cur.execute(
    'CREATE TABLE "秋田県"(id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING,code INTEGER,ex_name STRING)'
)
cur.execute('INSERT INTO "秋田県"(name,code,ex_name) values("秋田","050010","Akita")')
cur.execute('INSERT INTO "秋田県"(name,code,ex_name) values("横手","050020","Yokote")')

cur.execute(
    'CREATE TABLE "山形県"(id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING,code INTEGER,ex_name STRING)'
)
cur.execute('INSERT INTO "山形県"(name,code,ex_name) values("山形","060010","Yamagata")')
cur.execute('INSERT INTO "山形県"(name,code,ex_name) values("米沢","060020","Yonezawa")')
cur.execute('INSERT INTO "山形県"(name,code,ex_name) values("酒田","060030","Sakada")')

cur.execute(
    'CREATE TABLE "福島県"(id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING,code INTEGER,ex_name STRING)'
)
cur.execute('INSERT INTO "福島県"(name,code,ex_name) values("福島","070010","Fukushima")')
cur.execute('INSERT INTO "福島県"(name,code,ex_name) values("小名浜","070020","Onahama")')
cur.execute('INSERT INTO "福島県"(name,code,ex_name) values("若松","070030","Wakamatsu")')


cur.execute(
    'CREATE TABLE "福岡県"(id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING,code INTEGER,ex_name STRING)'
)
cur.execute('INSERT INTO "福岡県"(name,code,ex_name) values("福岡","400010","Fukuoka")')
cur.execute('INSERT INTO "福岡県"(name,code,ex_name) values("八幡","400020","Yahata")')
cur.execute('INSERT INTO "福岡県"(name,code,ex_name) values("飯塚","400030","Iizuka")')
cur.execute('INSERT INTO "福岡県"(name,code,ex_name) values("久留米","400040","Kurume")')

cur.execute(
    'CREATE TABLE "熊本県"(id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING,code INTEGER,ex_name STRING)'
)
cur.execute('INSERT INTO "熊本県"(name,code,ex_name) values("熊本","430010","Kumamoto")')
cur.execute('INSERT INTO "熊本県"(name,code,ex_name) values("阿蘇乙姫","430020","Asootohime")')
cur.execute('INSERT INTO "熊本県"(name,code,ex_name) values("牛深","430030","Ushibuka")')
cur.execute('INSERT INTO "熊本県"(name,code,ex_name) values("人吉","430040","Hitoyoshi")')

cur.execute(
    'CREATE TABLE "茨城県"(id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING,code INTEGER,ex_name STRING)'
)
cur.execute('INSERT INTO "茨城県"(name,code,ex_name) values("水戸","080010","Mito")')
cur.execute('INSERT INTO "茨城県"(name,code,ex_name) values("土浦","080020","Tsutiura")')

cur.execute(
    'CREATE TABLE "栃木県"(id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING,code INTEGER,ex_name STRING)'
)
cur.execute('INSERT INTO "栃木県"(name,code,ex_name) values("宇都宮","090010","Utsunomiya")')
cur.execute('INSERT INTO "栃木県"(name,code,ex_name) values("大田原","090020","Ootahra")')
conn.commit()


def fetch_city_list(prefecture_name: str):
    city_list = []
    conn = sqlite3.connect(dbname)
    cur = conn.cursor()
    cur.execute("SELECT count(*) FROM %s" % prefecture_name)  # 件数検索
    list = cur.fetchall()
    data_sum = list[0][0]

    cur.execute("SELECT * FROM %s" % prefecture_name)  # 県名から市のなまえを出力
    list = cur.fetchall()
    for i in range(0, data_sum):
        appendData = {
            "label": list[i][1],
            "value": list[i][1],
        }
        city_list.append(appendData)

    return city_list


def fetch_city_data(prefecture_name: str, city_name: str):
    conn = sqlite3.connect(dbname)
    cur = conn.cursor()
    cur.execute(
        "SELECT * FROM %s WHERE name= ? " % prefecture_name, (city_name,)
    )  # 選ばれた市の名前からデータを持ってくる
    list = cur.fetchone()

    sub_id = "{0:06d}".format(list[2])
    sub_name = list[3]

    return sub_id, sub_name
