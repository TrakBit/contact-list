import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider, Button, TextInput} from 'react-native-paper';
import {requestPermissionsAsync, getContactsAsync} from 'expo-contacts';
import {ContactListModal} from './components/contactListModal';

export default function App() {
    const [contacts, setContacts] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    const showModal = () => setModalVisible(true);
    const hideModal = () => setModalVisible(false);

    const getContacts = async () => {
        const {status} = await requestPermissionsAsync();
        if (status === 'granted') {
            const {data} = await getContactsAsync();
            if (data.length > 0) {
                const contactsData = data.filter((contact) => {
                    const {imageAvailable, phoneNumbers} = contact;
                    return imageAvailable && phoneNumbers && phoneNumbers.length > 0;
                });
                setContacts(contactsData);
                showModal();
            }
        }
    };

    const selectContact = (selectedContact) => {
        setPhoneNumber(selectedContact.phoneNumbers[0].number);
        hideModal();
    };

    return (
        <View style={styles.container}>
            <Provider>
                <View style={styles.container}>
                    <View style={{height: 10}}>
                        <Button
                            mode='contained'
                            onPress={() => getContacts()}
                        >
                            Contacts
                        </Button>
                        <TextInput
                            label='Phone No.'
                            value={phoneNumber}
                            style={{marginTop: 20}}
                            onChangeText={(text) => setPhoneNumber(text)}
                        />
                    </View>
                </View>
                <ContactListModal
                    modalVisible={modalVisible}
                    hideModal={hideModal}
                    contacts={contacts}
                    selectContact={selectContact}
                />
                <StatusBar style={'auto'}/>
            </Provider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
