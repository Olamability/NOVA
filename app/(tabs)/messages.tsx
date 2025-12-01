import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MESSAGES = [
  {
    id: '1',
    name: 'John Doe',
    message: 'Is this item still available?',
    time: '2m ago',
    unread: true,
  },
  {
    id: '2',
    name: 'Jane Smith',
    message: 'Can you deliver to Lekki?',
    time: '1h ago',
    unread: true,
  },
  {
    id: '3',
    name: 'Mike Johnson',
    message: 'Thanks for the quick delivery!',
    time: '3h ago',
    unread: false,
  },
];

export default function MessagesScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      
      <View style={styles.container}>
        <Text style={styles.title}>Messages</Text>

        <FlatList
          data={MESSAGES}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.messageCard}
              activeOpacity={0.7}
            >
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {item.name.charAt(0)}
                </Text>
              </View>
              <View style={styles.messageContent}>
                <View style={styles.messageHeader}>
                  <Text style={styles.messageName}>{item.name}</Text>
                  <Text style={styles.messageTime}>{item.time}</Text>
                </View>
                <Text style={[styles.messageText, item.unread && styles.unreadText]}>
                  {item.message}
                </Text>
              </View>
              {item.unread && <View style={styles.unreadBadge} />}
            </TouchableOpacity>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#184D3A',
    marginTop: 16,
    marginBottom: 24,
  },
  messageCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#184D3A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  messageName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#184D3A',
  },
  messageTime: {
    fontSize: 12,
    color: '#B0B0B0',
  },
  messageText: {
    fontSize: 14,
    color: '#687076',
  },
  unreadText: {
    fontWeight: '600',
    color: '#184D3A',
  },
  unreadBadge: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFD600',
    marginLeft: 8,
  },
});
