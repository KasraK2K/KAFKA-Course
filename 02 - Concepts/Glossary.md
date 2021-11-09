# Glossary

---

## Read More About Concepts
| Term | Description |
|------|-------------|
| Topic | Topics are used to organize data. You always read and write to and from a particular topic |
| Partition | Data in a topic is spread across a number of partitions. Each partition can be thought of as a log file, ordered by time. To guarantee that you read messages in the correct order, only one instance can read from a particular partition at a time. |
| Offset | A certain point in the partition log. When a consumer has consumed a message, it "commits" that offset, meaning that it tells the broker that the consumer group has consumed that message. If the consumer group is restarted, it will restart from the highest committed offset. |
| Broker | A single Kafka instance |
| Replication Factor | Partitions are typically replicated to one or more brokers to avoid data loss. |
| Leader | Although a partition may be replicated to one or more brokers, a single broker is elected the leader for that partition, and is the only one who is allowed to write or read to/from that partition |
| Producer | A client that writes data to one or more Kafka topics |
| Cluster | The collective group of machines that Kafka is running on |
| Consumer | A client that reads data from one or more Kafka topics |
| Consumer group | A collective group of consumer instances, identified by a [`groupId`](https://kafka.js.org/docs/consuming#a-name-options-a-options). In a horizontally scaled application, each instance would be a consumer and together they would act as a consumer group. |
| Group Coordinator | An instance in the consumer group that is responsible for assigning partitions to consume from to the consumers in the group |
| Rebalance | When a consumer has joined or left a consumer group (such as during booting or shutdown), the group has to "rebalance", meaning that a group coordinator has to be chosen and partitions need to be assigned to the members of the consumer group. |
| Heartbeat | The mechanism by which the cluster knows which consumers are alive. Every now and then ([`heartbeatInterval`](https://kafka.js.org/docs/consuming#a-name-options-a-options)), each consumer has to send a heartbeat request to the cluster leader. If one fails to do so for a certain period ([`sessionTimeout`](https://kafka.js.org/docs/consuming#a-name-options-a-options)), it is considered dead and will be removed from the consumer group, triggering a rebalance. |
&nbsp;
&nbsp;


To learn Concepts friendly and easy watch [Apache Kafka in 6 minutes](https://www.youtube.com/watch?v=Ch5VhJzaoaI)

![[concept-01.png]]

![[concept-02.png]]

![[concept-03-record-age-cleaner.png]]

![[concept-04-replication-factor.png]]
&nbsp;
&nbsp;

---

In the following please read [[Topic and Partition, Order, Offset]] concept.

---