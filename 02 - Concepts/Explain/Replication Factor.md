# Replication factor

---

## **`Replication factor`**:
Partitions are typically replicated to one or more brokers to avoid data loss.
&nbsp;
&nbsp;

## **`Explanation`**:
- Topics should have a replication factor > 1 (usually between 2 and 3)
- This is way if a broker is down, another broker can serve the data

_**`Example`**: Topic with 2 partitions and replication factor of 2_

![[topic-replication-factor-01.png]]
&nbsp;
&nbsp;

**Replication Factor should be at least 2 but usually is 3.** i show you the reason with an example:

_**`example`**: In this picture we have a topic and replication factor is equal 2. it create 3 broker for us and as you can see we lose broker 2 but it's fine because broker 1 and 3 continue processing._

![[topic-replication-factor-02.png]]
&nbsp;
&nbsp;

---

In the following please read [[Leader]] concept.

---