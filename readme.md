### Rabbit MQ
RabbitMQ is an open-source message broker that facilitates the communication between different components of a system by enabling message-based communication. It allows different applications or services to exchange data asynchronously through messages, which can be processed in a reliable, decoupled, and scalable manner.

#### Key Features of RabbitMQ:
 - Message Queuing
 - Decoupling
 - Reliability (durable queues and persistent messages)
 - Asynchronous Communication
 - Scalability

#### userful commands of docker
 - ``` docker image ls ```
 - ``` docker ps ```
 - ``` docker ps -a ```
 - ``` docker kill container_hash ```
 - ``` docker rm continaer_hash ```

#### to run mannually
 - ``` docker pull rabbitmq:3-management ```
 - ``` docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management ```
 - ``` node dist/index.js ```

#### to run by docker componse
 - ``` docker compose up ```
 - ``` node dist/index.js ```

