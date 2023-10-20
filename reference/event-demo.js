const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter {}

// Initialize object
const myEmitterInstance = new MyEmitter();

// Event listener
myEmitterInstance.on('event', () => console.log('event fired!!'));

// Initialize event
myEmitterInstance.emit('event');
myEmitterInstance.emit('event');
myEmitterInstance.emit('event');
myEmitterInstance.emit('event');