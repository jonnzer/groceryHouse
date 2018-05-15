### gyhouse

> 痴谷雨の杂货屋

#### 这是关于杂货屋的idea，它有我推荐的电影，亲测过的游戏，还有我喜欢的音乐🎵

#### 本项目前端技术栈为es6 + vue2.0 , 后台技术栈为 koa2.

#### 执行完sql之后，数据库搭建好后，用sqeuelize-auto导出数据结构
    sequelize-auto -o './schema' -d groceryHouse -h 127.0.0.1 -u root -p 3306 -x 123456 -e mysql;
    其中 -o 参数后面的是输出的文件夹目录，
         -d 参数后面的是数据库名，
         -h 参数后面是数据库地址，
         -u 参数后面是数据库用户名，
         -p 参数后面是端口号，
         -x 参数后面是数据库密码，这个要根据自己的数据库密码来！
         -e 参数后面指定数据库为mysql

#### server/config/db.js 初始化Seluelize 和 数据库的连接
