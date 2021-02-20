import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Modal, Portal, List, Avatar} from 'react-native-paper';

export const ContactListModal = ({modalVisible, hideModal, contacts, selectContact}) => (
    <Portal>
        <Modal
            visible={modalVisible}
            onDismiss={hideModal}
            contentContainerStyle={styles.modalContainer}
        >
            <ScrollView
                style={{
                    marginLeft: '20%',
                    marginTop: '10%',
                    marginBottom: '10%'
                }}
                vertical={true}
                showsVerticalScrollIndicator={false}
            >
                {
                    contacts.map((contact, i) => (
                        <List.Item
                            key={i}
                            title={contact.name}
                            description={contact.phoneNumbers[0].number}
                            left={() => (
                                <Avatar.Image
                                    size={48}
                                    source={{uri: contact.image.uri}}
                                />)}
                            onPress={() => selectContact(contact)}
                        />
                    ))
                }
            </ScrollView>
        </Modal>
    </Portal>
);

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center'
    }
});