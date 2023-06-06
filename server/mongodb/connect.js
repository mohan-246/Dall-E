import mongoose from 'mongoose';

const connectDB=(url) => {
    mongoose.set('strictQuery', true);
    console.log('connect');
    mongoose.connect(url)
    .then(()=> {console.log("connected");})
    .catch((err) => console.log(err));
}

export default connectDB;