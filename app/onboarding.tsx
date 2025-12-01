import { router } from 'expo-router';
import { useRef, useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ONBOARDING = [
  {
    key: '1',
    title: 'Shop & Pay\nYour Bills from\nAnywhere',
    image: require('@/assets/images/Easy shop 1.png'),
  },
  {
    key: '2',
    title: 'Order in units,\npacks or dozens',
    image: require('@/assets/images/Unit order 1.png'),
  },
  {
    key: '3',
    title: 'Get fast doorstep\ndelivery',
    image: require('@/assets/images/Delivery 1.png'),
  },
];

const { width } = Dimensions.get('window');

export default function Onboarding() {
  const [index, setIndex] = useState(0);
  const flatListRef = useRef(null);


  const handleScroll = (event: { nativeEvent: { contentOffset: { x: number } } }) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setIndex(slideIndex);
  };

  const handleNext = () => {
    if (index < ONBOARDING.length - 1) {
      if (flatListRef.current) {
        (flatListRef.current as any).scrollToIndex({ index: index + 1 });
      }
    } else {
      router.replace('/language');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.skip} onPress={() => router.replace('/language')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <FlatList
          ref={flatListRef}
          data={ONBOARDING}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
          renderItem={({ item }) => (
            <View style={styles.slide}>
              <Text style={styles.title}>{item.title}</Text>
              <Image source={item.image} style={styles.image} resizeMode="contain" />
            </View>
          )}
          keyExtractor={(item) => item.key}
        />
        <View style={styles.dotsContainer}>
          {ONBOARDING.map((_, i) => (
            <View key={i} style={[styles.dot, index === i && styles.activeDot]} />
          ))}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    // borderRadius: 0,
    // margin: 0,
    // overflow: 'hidden',
    justifyContent: 'center',
  },
  skip: {
    position: 'absolute',
    top: 32,
    right: 24,
    zIndex: 2,
  },
  skipText: {
    color: '#B0B0B0',
    fontSize: 18,
    fontWeight: '500',
  },
  slide: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#184D3A',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 36,
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 32,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#D0D0D0',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#184D3A',
  },
  button: {
    backgroundColor: '#184D3A',
    borderRadius: 12,
    marginHorizontal: 32,
    marginBottom: 32,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
