import { writeFile } from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);
    await writeFile(PATH_DB, data, 'utf-8');
    console.log('Контакти успішно записано!');
  } catch (error) {
    console.error('Помилка при записі файлу:', error.message);
  }
};
