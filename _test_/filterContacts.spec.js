import {filterContacts} from '../App';

const data = [
    {
        lookupKey: '183i6c8f3e4e90fdd3e2.3789r409-2A444E38522C382A3A5A2A',
        image: {
            uri: 'content://com.android.contacts/contacts/410/photo'
        },
        phoneNumbers: [
            {
                label: 'mobile',
                type: '2',
                id: '10',
                isPrimary: 0,
                number: '+34534535'
            }
        ],
        firstName: 'sdgsdfg',
        name: 'sdfgsdfg',
        id: '410',
        imageAvailable: true,
        contactType: 'person',
        lastName: 'sdfgdsfg'
    },
    {
        lookupKey: '183i5b55c21e8d6a9984.82r524-483A5A524E382E382A52382A44',
        phoneNumbers: [
            {
                label: 'mobile',
                type: '2',
                id: '774',
                isPrimary: 0,
                number: '‪+345354‬'
            },
            {
                label: 'mobile',
                type: '2',
                id: '775',
                isPrimary: 0,
                number: '345353'
            }
        ],
        firstName: 'dsfgsdfg',
        name: 'sdfg',
        imageAvailable: false,
        id: '526',
        emails: [
            {
                label: 'other',
                email: 'sdfsdf@gmail.com',
                type: '3',
                id: '768',
                isPrimary: 1
            }
        ],
        contactType: 'person',
        lastName: 'dfgdsfg'
    }
];

describe('filterContacts function', () => {
    test('should get filtered no image contacts', async () => {
        expect(filterContacts(data)).toEqual([data[0]]);
    });
});
