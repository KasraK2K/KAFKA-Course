# Group Coordinator

---

## **`Group Coordinator`**
An instance in the consumer group that is responsible for assigning partitions to consume from to the consumers in the group
&nbsp;
&nbsp;

## **`Explanation`**:
- Manage a list of group members
- Initiates a rebalance activity (Block the read from all members)
- Communicate about new assignment to consumers

![[group-coordinator-01.png]]
![[group-coordinator-02.png]]