const mqtt = require('mqtt');
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const MQTT_BROKER_URL = 'mqtt://broker.hivemq.com';
const MQTT_TOPIC = 'esp8266/alerta';

const mqttClient = mqtt.connect(MQTT_BROKER_URL);

mqttClient.on('connect', () => {
    console.log('Conectado ao broker MQTT!');
    mqttClient.subscribe(MQTT_TOPIC);
});

mqttClient.on('message', (topic, message) => {
    io.emit('mqttMessage', message.toString());
});

app.use(express.static('public'));

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
