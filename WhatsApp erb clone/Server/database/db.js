import mongoose from "mongoose";


const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-hzp1rb5-shard-00-00.tgwdbdh.mongodb.net:27017,ac-hzp1rb5-shard-00-01.tgwdbdh.mongodb.net:27017,ac-hzp1rb5-shard-00-02.tgwdbdh.mongodb.net:27017/?ssl=true&replicaSet=atlas-f24jbu-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
};

export default Connection;

