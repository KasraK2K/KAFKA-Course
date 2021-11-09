# Broker
A single Kafka instance

---

## Explanation:
- A Kafka [[Cluster]] is composed of multiple brokers (server)
- Each broker is identified with its ID (integer)
- Each broker contains certain topic partitions
- After connecting to any brokers (called a bootstrap broker), you will be connected to the entire cluster