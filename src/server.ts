import mongoose from 'mongoose';
import app from './app';
import env from './app/config';

async function Main() {
  try {
    await mongoose.connect(env.database_url as string)
    app.listen(env.port, () => {
      console.log(`Example app listening on port ${env.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

Main();
