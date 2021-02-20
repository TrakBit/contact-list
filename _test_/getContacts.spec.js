import {getContacts} from '../App';

// getContacts() cannot be tested beyond requestPermissionsAsync since its Expo SDK function

describe('GetContact function', () => {
    test('should get contacts of type array', async () => {
        const contacts = await getContacts();
        expect(contacts).toBeInstanceOf(Array);
    });
});

describe('GetContact function', () => {
    test('should give empty array', async () => {
        const contacts = await getContacts();
        expect(contacts).toEqual([]);
    });
});