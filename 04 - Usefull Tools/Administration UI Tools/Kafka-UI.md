# [KAFKA-UI](https://github.com/provectus/kafka-ui)
This is a Administration UI Tools for Kafka and it's very useful to see Kafka in GUI

---

## How To Use

**Get Docker Image**:

```bash
docker pull provectuslabs/kafka-ui:latest
```
&nbsp;
&nbsp;

**Create Container** from image:

```bash
docker run -p 8080:8080 \
	-e KAFKA_CLUSTERS_0_NAME=kafka \
	-e KAFKA_CLUSTERS_0_BOOTSTRAPSERVERS=localhost:9092 \
	-e KAFKA_CLUSTERS_0_ZOOKEEPER=localhost:2181 \
	--name kafka-ui \
	-d provectuslabs/kafka-ui:latest 
```
&nbsp;
&nbsp;

If you already created container from image you can **Start Container** with this command:
```bash
docker start kafka-ui
```
&nbsp;
&nbsp;

Now you can see [Administration UI Tools](http://localhost:8080/ui) in your browser