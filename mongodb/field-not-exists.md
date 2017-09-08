查询集合c中y的值为null或者不存在
db.c.find( { "y" : null } )

查询集合c中y的值为null，（仅返回y的值为null的数据，不会返回不存在的）
db.c.find( { “y” : { $type : 10 } } )
还有一种写法如下
db.c.find({“y”:{“$in”:[null], “$exists”:true}})

查询集合c中y的值不存在（不会返回y的值为null的数据）
db.c.find( { “y” : { $exists : false } } )