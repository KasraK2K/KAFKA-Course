# Leader

---

## **`Leader`**:
Although a partition may be replicated to one or more brokers, a single broker is elected the leader for that partition, and is the only one who is allowed to write or read to/from that partition
&nbsp;
&nbsp;

## **`Explanation`**:
- **At any time only 1 broker can be a leader for a given partition.**
- **Only that leader can receive and serve data for a partition**
- The other broker will synchronize the data
- There each partition has: one leader, and multiple ISR (In-sync Replica)

![[leader-for-a-partition.png]]
&nbsp;
&nbsp;

---

In the following please read [[Producer]] concept.

---