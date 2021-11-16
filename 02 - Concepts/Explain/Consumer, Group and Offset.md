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

I remind Kafka is different from legacy message queue in that reading a message dose not destroy it. It's still there to be read by any other consumer that might be interested in. in face it's perfectly normal in Kafka for many consumers to read one topic. They don't destroy, they just read.

![[multiple-consumer-read-one-topic-01.png]]
&nbsp;
&nbsp;

If you had a topic with 10 partitions, you could deploy as many as 10 consumers group instance and expect them all to participate in processing events. if you deployed 11th instance, that would be idle, cause there'll be no partitioned to assign to it.

![[multiple-consumer-read-one-topic-02.png]]
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
&nbsp;
&nbsp;

---

In the following please read [[Group Coordinator]] concept.

---