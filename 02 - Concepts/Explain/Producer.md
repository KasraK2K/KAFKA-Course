# Producer

---

## **`Producer`**:
A client that writes data to one or more Kafka topics

![[producer-01.png]]
&nbsp;
&nbsp;

## **`Explanation`**:
- Producers write data to topics.
- They only have to specify the topic name and one broker to connect to, and Kafka will automatically take care of routing the data to the right broker.
- Producers can choose to receive acknowledgment of data writes:
  1. **`Acks=0`**: _Producer won't wait for acknowledgment (possible data lose)_
  2. **`Acks=1`**: _Producer will wait for leader acknowledgment (limited data loss)_
  3. **`Acks=all`**: _Leader + replicas acknowledgment (no data loss)_

![[producer-02.png]]
&nbsp;
&nbsp;

### _Message key_:
- Producer can choose to send a key with the message
- If a key is sent, then the producer has the guarantee that all messages for that key will always go to the same partition
- This enable to guarantee ordering for specific key
&nbsp;
&nbsp;

---

In the following please read [[Consumer, Group and Offset]] concept.

---