# Kafka Connect

---

## **`Kafka Connect`**:
Kafka Connect acts as a mediator between the apache Kafka and different or other data-driven systems. The Kafka connector is nothing but a tool for reliable as well as scalable streaming solutions.  It will help to move a large amount of data or large data sets from Kafka’s environment to the external world or vice versa. The Kafka connector is helping with the data transfer, and it will help for the ingestion. It will ingest all the data into the Kafka topics. The Kafka connector provides low latency data access functionality. As per the requirement, we can use the Kafka export connector. It will help for the data deliver from the Kafka topics into the secondary catalogs like the ELK stack, elastic search, solr, etc.
&nbsp;
&nbsp;

## **`Explanation`**:
Why Kafka Connect is useful:
- Data integration system and ecosystem
- Because some other system are not Kafka
- External client process; dose not run on **Brokers**
- Horizontally scalable
- Fault tolerant
- Declarative

![[kafka-connect-01.png]]

For example this is json configuration to stream data from Kafka into [Elasticsearch](https://www.elastic.co/elasticsearch/):

```json
{
	"connector.class": "io.confluent.connect.elasticsearch.ElasticsearchConnector",
	"connection.url": "http://elasticsearch:9200",
	"tasks.max": "1",
	"topics": "simple.elasticsearch.data",
	"name": "simple-elasticsearch-connector",
	"type.name": "_doc"	,
	"value.convertor": "org.apache.kafka.connect.json.JsonConverter",
	"value.convertor.schema.enable": "false"
}
```
&nbsp;
&nbsp;

### _**`Connect Worker`**_
Connect Worker is one of nodes in the connect cluster runs one or more connectors.
&nbsp;
&nbsp;

### _**`Connector`**_
- Plugable software component
- Interfacing to external system and to Kafka
- Also exist as runtime utilities
- Source connector act as Producers
- Sink connector act as Consumers