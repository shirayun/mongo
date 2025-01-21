use bookShopDB
show dbs
db.createCollection('sites')

db.sites.insert({name:"site_1",url:"11",arr_codes:[]})
db.sites.insert({name:"site_2",url:"22",arr_codes:[]})
db.sites.insert({name:"site_3",url:"33",arr_codes:[]})

db.createCollection('books')

db.books.insert({name:"aaa", short_desc:"aaa",imgurl:"aaa",book_url:"aaa",isbn:"kkk",price:30.5,categories:["eee","rrr","ttt"],site_id:'67053f0ba89f0f76c2072f92'})
db.books.insert({name:"bbb", short_desc:"bbb",imgurl:"bbb",book_url:"bbb",isbn:"kkk",price:30.5,categories:["eee","rrr","ttt"],site_id:'67053f0ba89f0f76c2072f93'})
db.books.insert({name:"ccc", short_desc:"ccc",imgurl:"ccc",book_url:"ccc",isbn:"kkk",price:30.5,categories:["eee","rrr","ttt"],site_id:'0x67053f0ba89f0f76c2072f94'})

show collections

db.sites.drop()

