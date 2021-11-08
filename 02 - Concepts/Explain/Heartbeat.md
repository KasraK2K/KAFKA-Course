# Heartbeat
The mechanism by which the cluster knows which consumers are alive. Every now and then ([`heartbeatInterval`](https://kafka.js.org/docs/consuming#a-name-options-a-options)), each consumer has to send a heartbeat request to the cluster leader. If one fails to do so for a certain period ([`sessionTimeout`](https://kafka.js.org/docs/consuming#a-name-options-a-options)), it is considered dead and will be removed from the consumer group, triggering a rebalance.

---

