# Consumer

---

## **`Consumer`**:
A client that reads data from one or more Kafka topics
- Consumer read data from topic
- They only have to specify the topic name and one broker to connect to, and Kafka will automatically take care of pulling the data from the right brokers
- Data is read in order **for each partitions**

![[consumer.png]]
&nbsp;
&nbsp;

## **`Consumer group`**:
A collective group of consumer instances, identified by a [`groupId`](https://kafka.js.org/docs/consuming#a-name-options-a-options). In a horizontally scaled application, each instance would be a consumer and together they would act as a consumer group.
- Consumers read data from consumers groups
- Each consumer within a group read from exclusive partitions
- You cannot have more consumers than partitions (otherwise some will be inactive)

![[consumer-group.png]]
&nbsp;
&nbsp;

## **`Consumer Offset`**:
- Kafka store the offsets at witch a consumer group has reading
- The offset commit live in a Kafka topic names "`__consumer_offsets`"
- When a consumer has processed data received some Kafka, it should be committing the offsets
- If a consumer process dies, it will be able to read back from it left off thanks to consumer offsets!

![[consumer-offset.png]]