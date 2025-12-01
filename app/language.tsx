import { router } from 'expo-router';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LANGUAGES = [
  { key: 'en', label: 'English'  },
  { key: 'yo', label: 'Yoruba' },
  { key: 'ig', label: 'Igbo' },
  { key: 'ha', label: 'Hausa' },
];

export default function Language() {
  const [selected, setSelected] = useState('en');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <View style={styles.container}>
<Text style={styles.title}>{'Choose Your\nLanguage'}</Text>
      <FlatList
        data={LANGUAGES}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.option, selected === item.key && styles.selectedOption]}
            onPress={() => setSelected(item.key)}
            activeOpacity={0.8}
          >
            <Text style={styles.optionText}>{item.label}</Text>
            <View style={[styles.radio, selected === item.key && styles.radioSelected]}>
              {selected === item.key && <View style={styles.radioDot} />}
            </View>
          </TouchableOpacity>
        )}
        style={{ width: '100%' }}
        contentContainerStyle={{ alignItems: 'center' }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace('/user-type')}
        activeOpacity={0.9}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 24,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#141515',
    textAlign: 'center',
    marginTop: 45,
    marginBottom: 61,
    lineHeight: 36,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  selectedOption: {
    borderColor: '#184D3A',
  },
  optionText: {
    fontSize: 18,
    color: '#184D3A',
    fontWeight: '500',
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#B0B0B0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    borderColor: '#FFD600',
  },
  radioDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFD600',
  },
  button: {
    backgroundColor: '#184D3A',
    borderRadius: 12,
    marginTop: 32,
    width: '90%',
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFD600',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
