const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tourModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('DB connection successful!');
  });

// Read JSON file
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, 'utf-8'));

// Import data into database
const importData = async () => {
  try {
    await Tour.create(tours);
    // eslint-disable-next-line no-console
    console.log('Data successfully loaded!');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
  process.exit();
};

// Delete all data from collection
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    // eslint-disable-next-line no-console
    console.log('Data successfully deleted!');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
  process.exit();
};

// Run the script with the following command:
// node dev-data/data/import-dev-data.js --import
// node dev-data/data/import-dev-data.js --delete

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
