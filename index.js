var mqtt = require("mqtt");

// https://activemq.bytecode.ca
var client = mqtt.connect("mqtt://activemq.bytecode.ca", {
  clientId: "nodejs",
  username: "shamssub",
  password: "grape",
});

client.on("connect", () => {
  console.log("connected..");
  client.subscribe("in/shams/topic1", (err) => {
    if (err) return console.log(err);
    console.log("subscribed..");
    try {
      client.publish("in/shams/topic1", "Hello mqtt");
    } catch (err) {
      console.log(err);
    }
  });
});

client.on("message", (topic, message, packet) => {
  console.log("message is " + message);
  console.log("topic is " + topic);
  client.end();
});

client.on("error", (err) => {
  console.log(err);
  client.end();
});
