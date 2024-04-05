/* eslint-disable prettier/prettier */
export const config = () => ({
  port: process.env.PORT || 5000,
  secretKey: process.env.SECRET_KEY || 'TopSecret51@',
  //mongoUri: process.env.MONGO_URi || 'mongodb://localhost:27017/ecomm-api',
mongoUri: process.env.MONGO_URi ||  'mongodb+srv://Riya:Riya@mongodbcodewithharry.86453cn.mongodb.net/cafe',
});
