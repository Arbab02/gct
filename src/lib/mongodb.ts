import mongoose from 'mongoose';

interface Connection {
  isConnected?: number;
}

const connection: Connection = {};

async function connect() {
  console.log('Connection object at start of connect:', connection);

  if (connection.isConnected) {
    console.log('Already connected');
    return;
  }

  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('Use previous connection');
      return;
    }
    await mongoose.disconnect();
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI!);
    console.log('New connection established');
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }

  console.log('Connection object at end of connect:', connection);
}

async function disconnect() {
  console.log('Disconnecting. Current connection object:', connection);

  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = 0;
      console.log('Disconnected in production');
    } else {
      console.log('Not disconnected in development mode');
    }
  }
}

const db = { connect, disconnect };
export default db;