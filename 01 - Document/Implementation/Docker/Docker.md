# KAFKA Docker Implementation

---

## STEP 1: Create Kafka Docker
Create `docker-compose.yml` like this:
```yaml
version: '3'
services:
	zookeeper:
		image: 'bitnami/zookeeper:latest'
		ports:
			- '2181:2181'
		environment:
- ALLOW_ANONYMOUS_LOGIN=yes
	kafka:
		image: 'bitnami/kafka:latest'
		container_name: 'kafka'
		ports:
			- '9092:9092'
		environment:
			- KAFKA_BROKER_ID=1
			- KAFKA_LISTENERS=PLAINTEXT://:9092
			- KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://127.0.0.1:9092
			- KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181
			- ALLOW_PLAINTEXT_LISTENER=yes
		depends_on:
			- zookeeper
```
&nbsp;
&nbsp;

## STEP 2: Create Topic
_With this command we create a topic inside of the docker_
```bash
docker exec -it kafka /opt/bitnami/kafka/bin/kafka-topics.sh \
	--create \
	--topic test \
	--bootstrap-server localhost:9092 \
	--partitions 1 \
	--replication-factor 1
```
**`create`**: _Create command._
**`topics`**: _Topic name._
**`bootstrap-server`**: _What server we chose to create topic._
**`partitions`**: _Number of partitions we need to create._
**`replication-factor`**: _Replication factor defines the number of copies of a topic in a Kafka cluster._

Please take a look at this picture:

![[partitions-in-kafka.png]]

in this picture we have 1 topic and that topic has 3 partitions.