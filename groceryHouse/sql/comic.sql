CREATE TABLE IF NOT EXISTS `grocery_comic` (
    `comic_id` INT(11) NOT NULL AUTO_INCREMENT,   -- 漫画id
    `comic_create_data` Date  NOT NULL,         -- 创造时间
    `comic_name` CHAR(255) NOT NULL,              -- 漫画名
    `comic_tag` CHAR(255) NOT NULL,               -- 标签
    `comic_pic` CHAR(255) NOT NULL,               -- 图
    `comic_link` CHAR(255) NOT NULL,              -- 观看链接
    PRIMARY KEY (`comic_id`)
) ENGINE=InnoDB AUTO_INCREMENT = 1 DEFAULT CHARSET=utf8;

INSERT INTO grocery_comic (comic_id,comic_create_data,comic_name,comic_tag,comic_pic,comic_link) VALUES
(1,'2018-06-06 23:00:00','镖人','wuXia','https://manhua.qpic.cn/manhua_detail/0/20_09_41_09fc00139b33fca1369bee869b8329c3_9514.jpg/0','http://ac.qq.com/Comic/ComicInfo/id/540487');




