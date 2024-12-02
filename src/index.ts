// queue - based on fifo (first in, first out)
// queue - redis, sqs, .....

// designing of queue
// now the GPU's as a consumers, there are GPU's based tasks also.
// we have to re try them on failling them to transfer.
// managing of the load balancing of queue.

// fanout artitecture
// queue -> workers
// let suppose there are 3 worker
// w1, w2, w3
// q1
// on payment by user (done in some micr service)
// q1 -> w1 (notification to user as payment done)
// q2 -> w2 (mail to user as receipt)
// q3 -> w3 (notification to everyone someone buy something)

// standard atitecture
// queue -> workers
// let suppose there are 3 worker
// w1, w2, w3
// q1
// on getting some video in queue (by microservice from s3 to queue)
// q1 -> w1 (processing of video or processing of code)
// no smaething to w2 and w3

// pubsubs - queue in which every message reach to everyone
// all publisher publish in queue, while subscirber consumes it

// queues example
// 1. BullMQ - it works on redis.
//      - support for inqueing and dequeing messages, concurrency
//      - retraming mechaninsm, deplay, removal, global concurrency...
//      - unable to fanout method itself
//      - manually fanout by q1 -> [w1] -> (w2, w3, w4)
// 2. SQS (amazon simple queue service) - it is owned by aws
//      - overall performance of sqs is less then BULLmq, but performance remains constant over scalablity
//      - shorter term -> bullMQ and longer term -> sqs
// 3. kafka - it can implements using mechanism of consumers, groups and partition
//          - standard queue(when all consumer in same group)
//          - pub sub, fanout(when diff group contains consumers)
//          - scalable, fast but hard to manage and setup, expensive to host
// 4. RabbitMQ - (open source, support everything)
//             - supports eberything standard, pubsubs queue.
//             - q1 -> w1, q2 -> (w1, w2), q3 -> x -> (w1, w2, w3) pubsubs
//             - here x is mechanism who used to fanout (x is exchange)
//             - we can set up mechanism here to how message going (patterns)

import express from "express";
import amqp from "amqplib";

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`server listening at: http://localhost:${PORT}`);
  amqp.connect("amqp://localhost", function (error0: any, connection: any) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function (error1: any, channel: any) {
      if (error1) {
        throw error1;
      }
    });
  });
});
