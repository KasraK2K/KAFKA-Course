# Create More Broker
---
&nbsp;
&nbsp;

## Create
To create more broker create more **`server.properties` ** in **`config`** folder. you need to change some lines of code to have another brokers.

Example:
```bash
touch config/server-broker1.properties
touch config/server-broker2.properties
touch config/server-broker3.properties
```

now for each one we should change `broker.id`, `listeners`, `advertised.listeners` and `log.dirs`.

I write `server-broker1.properties` for example and you can edit other brokers and so on.

```properties
broker.id=1
listeners=PLAINTEXT://:9093
advertised.listeners=PLAINTEXT://127.0.0.1:9093
log.dirs=/home/kasra/SOFTWARE/K-Kafka/tmp/1
```

As you can see i changed `log.dirs` and for each one i created new folder.
&nbsp;
&nbsp;

## Run Consumers
After all you should run all three consumer broker and listen to them. for this you can use this command:
```bash
bin/kafka-console-consumer.sh --topic test-topic --from-beginning --bootstrap-server localhost:9092, localhost:9093, localhost:9094
```
&nbsp;
&nbsp;

## Run Producers
If you wish to run producer for all this consumers run this command:
```bash
bin/kafka-console-producer.sh --topic test-topic --bootstrap-server localhost:9092, localhost:9093, localhost:9094
```
