import amqp from "amqplib";

const send_message_to_queue = async (queue: string, msg: string) => {
  try {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    // Ensure messages are not lost if RabbitMQ crashes
    await channel.assertQueue(queue, {
      durable: true,
    });

    // Ensure the message survives a broker crash
    // Msg send in Buffer form
    channel.sendToQueue(queue, Buffer.from(msg), {
      persistent: true,
    });

    console.log(`Sent: ${msg} to queue ${queue}`);
    setTimeout(() => {
      channel.close();
      connection.close();
    }, 500);
  } catch (error) {
    console.error("Error sending message:", error);
  }
};

export default send_message_to_queue;
