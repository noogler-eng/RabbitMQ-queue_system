import amqp from "amqplib";

const get_message_from_queue = async (queue: string) => {
  try {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    // Ensure messages are not lost if RabbitMQ crashes
    await channel.assertQueue(queue, {
      durable: true,
    });

    channel.consume(queue,
      (msg) => {
        if (msg !== null) {
          const content = msg.content.toString();
          console.log(`Received: ${content}`);
          channel.ack(msg);
        }
      },{
        // Automatically acknowledge the message once it has been consumed
        noAck: false,
      }
    );
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

export default get_message_from_queue;
