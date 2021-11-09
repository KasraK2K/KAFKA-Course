# Broker
A single Kafka instance

---

## Explanation:
- A Kafka [[Cluster]] is composed of multiple brokers (server)
- Each broker is identified with its ID (integer)
- Each broker contains certain topic partitions
- After connecting to any brokers (called a bootstrap broker), you will be connected to the entire cluster
- A good number to start is 3 brokers, but some big clusters have over 100 brokers

![[broker-and-topic.png]]
&nbsp;
&nbsp;

---

In the following please read [[Replication Factor]] concept.

---