import { StatusBar } from 'expo-status-bar';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const FEATURED_PRODUCTS = [
  {
    id: '1',
    title: 'iPhone 13 Pro',
    price: '₦450,000',
    image: require('@/assets/images/cart.png'),
    category: 'Electronics',
  },
  {
    id: '2',
    title: 'Nike Air Max',
    price: '₦35,000',
    image: require('@/assets/images/cart.png'),
    category: 'Fashion',
  },
  {
    id: '3',
    title: 'Samsung Galaxy S21',
    price: '₦320,000',
    image: require('@/assets/images/cart.png'),
    category: 'Electronics',
  },
  {
    id: '4',
    title: 'MacBook Pro',
    price: '₦850,000',
    image: require('@/assets/images/cart.png'),
    category: 'Electronics',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Welcome to</Text>
          <Text style={styles.title}>NOVA</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            placeholderTextColor="#B0B0B0"
          />
        </View>

        {/* Featured Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Products</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={FEATURED_PRODUCTS}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.productCard} activeOpacity={0.8}>
                <View style={styles.imageContainer}>
                  <Image source={item.image} style={styles.productImage} />
                </View>
                <Text style={styles.productTitle} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.productPrice}>{item.price}</Text>
              </TouchableOpacity>
            )}
            contentContainerStyle={{ paddingHorizontal: 16 }}
          />
        </View>

        {/* Categories Quick Access */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Shop by Category</Text>
          <View style={styles.categoriesGrid}>
            {['Electronics', 'Fashion', 'Home', 'Sports'].map((cat) => (
              <TouchableOpacity key={cat} style={styles.categoryChip}>
                <Text style={styles.categoryChipText}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Listings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Listings</Text>
          <View style={styles.productsGrid}>
            {FEATURED_PRODUCTS.map((product) => (
              <TouchableOpacity
                key={product.id}
                style={styles.gridProductCard}
                activeOpacity={0.8}
              >
                <View style={styles.gridImageContainer}>
                  <Image source={product.image} style={styles.gridProductImage} />
                </View>
                <Text style={styles.gridProductTitle} numberOfLines={2}>
                  {product.title}
                </Text>
                <Text style={styles.gridProductPrice}>{product.price}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
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
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  greeting: {
    fontSize: 14,
    color: '#687076',
    marginBottom: 4,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#184D3A',
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    color: '#184D3A',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#184D3A',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  seeAll: {
    fontSize: 14,
    color: '#184D3A',
    fontWeight: '600',
  },
  productCard: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginRight: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  imageContainer: {
    width: '100%',
    height: 140,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#184D3A',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#184D3A',
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 8,
  },
  categoryChip: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  categoryChipText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#184D3A',
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  gridProductCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  gridImageContainer: {
    width: '100%',
    height: 120,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridProductImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  gridProductTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#184D3A',
    marginBottom: 4,
  },
  gridProductPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#184D3A',
  },
});
