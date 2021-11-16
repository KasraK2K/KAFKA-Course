# Topic, Partition and Offset

---

## **`Topic`**:
Topics are used to organize data. You always read and write to and from a particular topic

![[topic-partition-01.png]]
&nbsp;
&nbsp;

## **`Partition`**:
Data in a topic is spread across a number of partitions. Each partition can be thought of as a log file, ordered by time. To guarantee that you read messages in the correct order, only one instance can read from a particular partition at a time.
_**NOTE**_: If we diden't chose key for messages (messages has no key), messages that that you write will be distributed _**round robin**_ among the topic's partition.
&nbsp;
&nbsp;

_**partition without key**_:

![[partition-round-robin.png]]

because this partitions has no key they are unordered partitions:

![[unordered-partition.png]]
&nbsp;
&nbsp;

_**partition with key**_:

![[partition-with-key.png]]

because this partitions has key they are ordered partitions:

![[ordered-partition.png]]
&nbsp;
&nbsp;

## **`Offset`**:
A certain point in the partition log. When a consumer has consumed a message, it "commits" that offset, meaning that it tells the broker that the consumer group has consumed that message. If the consumer group is restarted, it will restart from the highest committed offset.
&nbsp;
&nbsp;

## **`Explanation`**:
Topic is a particular stream of data:
- Similar to a **Table** in a database (without all constrains)
- You can have a **Many Topics** a you want
- A topic is identified by it **Name**

Topics are split by **Partition**:
- Each partition is **Ordered**
- Each message within a partition gets an incremental id, called **Offset**

![[topic-partition-02.png]]
&nbsp;
&nbsp;

### _Note_:
-   Offset is only meaning for a specific partition.  
    _**`Example`**: offset 3 in partition 2 dosen't re_present the same data as offset 3 in partition 1_
-   Order is guaranteed only within a partition (not across partitions)
-   Data is kept for a limited time (default two weeks)
-   Once the data is written to a partition, **it can't be changed** (immutability)
-   Data is assigned randomly to a partition unless a key is provided (more about this later)
-   You can have as many partitions per topic as you want
&nbsp;
&nbsp;

---

In the following please read [[Broker]] concept.

---