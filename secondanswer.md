CAP Theorem

The CAP Theorem states that a distributed database system can guarantee only two out of the following three properties at any given time:

Consistency (C): Every read receives the most recent write or an error.
Availability (A): Every request receives a response, without guarantee that it contains the most recent data.
Partition Tolerance (P): The system continues to operate despite network failures or partitions.

In distributed systems, network partitions are inevitable. When a partition occurs, the system must choose between consistency and availability. If it chooses consistency, some requests may be rejected to ensure all nodes return the same data. If it chooses availability, the system will respond to all requests, but the data may not be consistent across nodes.

Therefore, it is impossible for a distributed system to guarantee all three properties simultaneously, and a trade-off must always be made depending on the application requirements.