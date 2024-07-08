# TTL 索引(TTL Indexes)

### 什么是TTL索引？

TTL indexes are special single-field indexes that MongoDB can use to automatically remove documents from a collection
after a certain amount of time or at a specific clock time. Data expiration is useful for certain types of information
like machine generated event data, logs, and session information that only need to persist in a database for a finite
amount of time.
  
TTL 索引是特殊的单字段索引，MongoDB
可以在一定时间后或在特定时钟时间使用这种索引自动从集合中删除文档。数据过期对于某些类型的信息（例如机器生成的事件数据、日志和会话信息）很有用，这些信息仅需要在数据库中保留有限的时间。

### 参考文档

https://www.mongodb.com/docs/manual/core/index-ttl/