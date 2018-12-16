CREATE TABLE IF NOT EXISTS `grocery_movie` (
    `movie_id` INT(11) NOT NULL AUTO_INCREMENT,   -- 电影id
    `movie_create_data` Date NOT NULL,         -- 创造时间
    `movie_name` CHAR(255) NOT NULL,              -- 电影名字
    `movie_actor` CHAR(255) NOT NULL,             -- 演员
    `movie_tag` CHAR(255) NOT NULL,               -- 标签
    `movie_sum` CHAR(255) NOT NULL,               -- 剧情简介
    `movie_high_pic` CHAR(255) NOT NULL,          -- 高清大图
    `movie_simple_pic` CHAR(255) NOT NULL,        -- 小图
    `movie_content` CHAR(255) NOT NULL,           -- 具体内容
    `movie_seed` CHAR(255) NOT NULL,              -- 种子
    PRIMARY KEY (`movie_id`)
) ENGINE=InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET=utf8;

INSERT INTO grocery_movie (movie_id,movie_create_data,movie_name,movie_actor,movie_tag,movie_sum,movie_high_pic,movie_simple_pic,movie_content,movie_seed) VALUES
    (1,'2018-05-13','头号玩家','马克·里朗斯,泰伊·谢里丹','科幻','VR大作，掠夺资源','http://img5.mtime.cn/pi/2018/04/12/143844.92847145_1000X1000.jpg','https://pic2.zhimg.com/80/v2-e66b436b0022c35fe99c69cd03d34b96_hd.jpg',
    '片背景设定在处于混乱和崩溃边缘的2045年，彼时人们将救赎的希望寄托于 “绿洲”，这是一个由鬼才詹姆斯·哈利迪(马克·里朗斯 饰)一手打造的虚拟现实世界。哈利迪弥留之际，宣布会将巨额财产留给第一个发现他在“绿洲”中藏匿的彩蛋的人，自此引发了一场全世界范围内的竞争。平平无奇的玩家韦德·沃兹(泰尔·谢里丹 饰)也决定参赛，却发现自己踏上的是一条虚实结合、神秘凶险的寻宝之旅。','http://dl186.80s.im:920/1805/头号玩家/头号玩家.mp4');

