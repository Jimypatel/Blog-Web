import mongoose from 'mongoose';



const Connection = async () => {
    const URL = `mongodb+srv://jimypatel:jimy@1234@blogweb.57ydn.mongodb.net/BLOGWEB1?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;