import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
const generateContacts = async (number) => {
  try {
    const existingContacts = await readContacts();
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      const contact = createFakeContact();
      newContacts.push(contact);
    }
    const updatedContacts = [...existingContacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log(
      `Успішно додано ${number} контактів.Загалом ${updatedContacts.length}`,
    );
  } catch (error) {
    console.error('Помилка при створинні контактів:', error.message);
  }
};

generateContacts(5);
