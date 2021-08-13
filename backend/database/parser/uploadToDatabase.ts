import {dbconnect} from '@mongoose';
import {parseProblems} from './upload';

async function uploadToDatabase() {
  const connection = dbconnect();
  await parseProblems();
  connection.close();
  console.log('Server Closed');
}

uploadToDatabase();
