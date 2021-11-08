# KAFKA Binary Implementation

---

## STEP 1: Get Kafka
Download from [here](https://www.apache.org/dyn/closer.cgi?path=/kafka/3.0.0/kafka_2.13-3.0.0.tgz)
```bash
tar -xzf kafka_2.13-3.0.0.tgz
cd kafka_2.13-3.0.0
```
&nbsp;
&nbsp;

## STEP 2: Start the Kafka Environment
**Terminal `1`**
_Start the ZooKeeper Service_
```bash
bin/zookeeper-server-start.sh config/zookeeper.properties
```
  
**Terminal `2`**
_Start the Kafka Broker Service_
```bash
bin/kafka-server-start.sh config/server.properties
```
_If you need to **create more broker** one choice is create more `server.properties`  in `config` folder. read [[Create More Broker]]._

&nbsp;
&nbsp;

## STEP 3: Create a Topic
**Terminal `3`**
_Create a Topic_
```bash
bin/kafka-topics.sh --create --topic quickstart-events --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1
```
&nbsp;

_Details Such as the Partition Count_
```bash
bin/kafka-topics.sh --describe --topic quickstart-events --bootstrap-server localhost:9092
```
&nbsp;
&nbsp;

## STEP 4: Write Some Events into the Topic
**Terminal `3`**
_Create Event into Tpoic_
```bash
bin/kafka-console-producer.sh --topic quickstart-events --bootstrap-server localhost:9092
```
&nbsp;
&nbsp;

## STEP 5: Read the Events
```bash
bin/kafka-console-consumer.sh --topic quickstart-events --from-beginning --bootstrap-server localhost:9092
```
&nbsp;
&nbsp;

---

See Implementation in [[Implementation]]
More Document in [GitBook](https://jaceklaskowski.gitbooks.io/apache-kafka/content)

---