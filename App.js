import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';

export default function App() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    // Simulated initial messages when the component mounts
    const initialMessages = [
      {
        id: '1',
        text: 'Kulang sa load? May TeaM DiskarteTIP kami sayo dahil P1 nalang ang service fee kapag mag-reg...',
        user: {
          name: 'Messages from Unknown Sources',
          avatarUrl: 'https://th.bing.com/th/id/OIP.hqtNwsOIFkgdZZZ3KB6niAHaHa?w=188&h=188&c=7&r=0&o=5&pid=1.7',
        },
      },
      {
        id: '2',
        text: 'May naghihintay na FREEBIES at SURPRISES sayo! Kunin mo lang sa GigaLife App smrt.ph/GigaLifeApp...',
        user: {
          name: 'TNT',
          avatarUrl: 'https://www.sandcanyoncc.com/wp-content/uploads/2020/03/no-profile-picture-icon-15.png',
        },
      },
      {
      id: '3',
        text: '1/2 HUWAG MANIWALA SA TEXT NA NAGLALAMAN NG PAGHIKAYAT O PAGSALI SA...',
        user: {
          name: 'NTC',
          avatarUrl: 'https://www.sandcanyoncc.com/wp-content/uploads/2020/03/no-profile-picture-icon-15.png',
        },
      },
      {
      id: '4',
        text: 'Hi, Ka-TM! Nais naming ipaalam sa iyo na ang Big-A-Ten promos sa Gcash ay magiging 600MB para sa...',
        user: {
          name: 'TM',
          avatarUrl: 'https://www.sandcanyoncc.com/wp-content/uploads/2020/03/no-profile-picture-icon-15.png',
        },
      },
      {
      id: '5',
        text: 'Nag online nako kuya kay mag search kog act hihi',
        user: {
          name: 'Jesreel',
        avatarUrl:'https://web.facebook.com/photo/?fbid=1439164109810392&set=a.1439160683144068',
      },
    },
    {
      id: '6',
        text: 'Huwaton nalang namo',
        user: {
          name: 'Kuya Celso I.',
        avatarUrl:'https://www.sandcanyoncc.com/wp-content/uploads/2020/03/no-profile-picture-icon-15.png',
      },
    },
    {
    id: '7',
          text: 'Hi kat , kumusta man ka diha ?',
          user: {
            name: 'Katrina (kat2) Inting',
          avatarUrl:'https://www.sandcanyoncc.com/wp-content/uploads/2020/03/no-profile-picture-icon-15.png',
      },
    },
    {
      id: '8',
            text: 'Manage your account, access the most EXCLUSIVE promos & do MORE with GigaLife App! Its easy an...',
            user: {
              name: 'SMARTLoad',
            avatarUrl:'https://www.sandcanyoncc.com/wp-content/uploads/2020/03/no-profile-picture-icon-15.png',
        },
      },

    //Add more initial messages as needed
  ];

    setMessages(initialMessages);
  },[]);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        id: Date.now().toString(),
        text: inputMessage,
        user: {
          name: 'Jesreel', // You can replace this with the authenticated user's name
          avatarUrl: '', // You can replace this with the authenticated user's avatar URL
        },
      };

      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Messages</Text>
      </View>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Image source={{ uri: item.user.avatarUrl }} style={styles.avatar} />
            <View style={styles.messageContent}>
              <Text style={styles.userName}>{item.user.name}</Text>
              <Text style={styles.messageText}>{item.text}</Text>
            </View>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={inputMessage}
          onChangeText={(text) => setInputMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'green',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
  },
  userName: {
    fontWeight: 'light',
    fontSize: 16,
  },
  messageText: {
    fontSize: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 16,
  },
  sendButton: {
    marginLeft: 10,
    paddingVertical: 10,
  },
  sendButtonText: {
    color: '#1DA1F2',
    fontWeight: 'bold',
  },
});
