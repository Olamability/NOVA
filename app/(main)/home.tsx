import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Link } from 'expo-router';
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

const QUICK_ACTIONS = [
  { key: 'paybills', label: 'Pay Bills', icon: 'creditcard' },
  { key: 'sendmoney', label: 'Send Money', icon: 'arrow.up.right.circle' },
  { key: 'track', label: 'Track Order', icon: 'location' },
];

const CATEGORIES = [
  { key: 'groceries', label: 'Groceries', icon: 'cart' },
  { key: 'money', label: 'Money', icon: 'banknote' },
  { key: 'food', label: 'Food', icon: 'fork.knife' },
  { key: 'services', label: 'Services', icon: 'wrench' },
  { key: 'bills', label: 'Bills', icon: 'doc.text' },
];

const FEATURED_PRODUCTS = [
  {
    id: '1',
    title: 'Fresh Mangoes',
    price: 'N800',
    image: require('@/assets/images/cart.png'),
  },
  {
    id: '2',
    title: 'Organic Brown Rice',
    price: 'N800',
    image: require('@/assets/images/cart.png'),
  },
];

export default function HomeScreen() {
  const colorScheme = useColorScheme() ?? 'light';
  const bg = colorScheme === 'dark' ? '#151718' : '#F6F8F9';
  const headerBg = colorScheme === 'dark' ? '#184D3A' : '#004938';
  const cardBg = colorScheme === 'dark' ? '#232323' : '#222';
  const textColor = colorScheme === 'dark' ? '#fff' : '#222';
  const iconColor = colorScheme === 'dark' ? '#fff' : '#004938';

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bg }]}>  
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>
        {/* Green Header with Logo and Icons */}
        <View style={[styles.header, { backgroundColor: headerBg }]}>  
          <View style={styles.headerRow}>
            <Image source={require('@/assets/images/logo.png')} style={styles.logo} />
            <View style={styles.searchBarContainer}>
              <IconSymbol name="magnifyingglass" color={'#687076'} size={18} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search product or service..."
                placeholderTextColor={'#687076'}
              />
            </View>
            <TouchableOpacity style={styles.headerIcon}><IconSymbol name="cart" color={'#fff'} size={22} /></TouchableOpacity>
          </View>
        </View>
        {/* Promo Card with Image */}
        <View style={styles.promoCard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.promoText}>Shop & Pay Your Bills{"\n"}with Ease!</Text>
            <TouchableOpacity style={styles.promoButton}>
              <Text style={styles.promoButtonText}>Track Order</Text>
            </TouchableOpacity>
          </View>
          <Image source={require('@/assets/images/promo-mango.png')} style={styles.promoImage} />
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsRow}>
          {QUICK_ACTIONS.map((action) => (
            <TouchableOpacity key={action.key} style={styles.quickAction}>
              <View style={styles.quickActionIcon}>
                <IconSymbol name={action.icon as any} color={'#fff'} size={22} />
              </View>
              <Text style={styles.quickActionLabel}>{action.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesRow} contentContainerStyle={{ paddingHorizontal: 0 }}>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity key={cat.key} style={styles.categoryIcon}>
              <IconSymbol name={cat.icon as any} color={'#004938'} size={22} />
              <Text style={styles.categoryLabel}>{cat.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Featured Products */}
        <View style={styles.featuredSection}>
          <Text style={styles.featuredTitle}>Featured Products</Text>
          <FlatList
            data={FEATURED_PRODUCTS}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Link
                href={{
                  pathname: '/(main)/product-details',
                  params: {
                    id: item.id,
                    title: item.title,
                    price: item.price,
                  },
                }}
                asChild
              >
                <TouchableOpacity style={styles.productCard} activeOpacity={0.85}>
                  <Image source={item.image} style={styles.productImage} />
                  <Text style={styles.productName}>{item.title}</Text>
                  <Text style={styles.productPrice}>{item.price}</Text>
                  <TouchableOpacity style={styles.addToCartBtn}>
                    <Text style={styles.addToCartText}>+ Add to Cart</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              </Link>
            )}
            contentContainerStyle={{ paddingHorizontal: 0 }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 0,
  },
  logo: {
    width: 80,
    height: 32,
    resizeMode: 'contain',
  },
  searchBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingHorizontal: 12,
    marginHorizontal: 12,
    height: 40,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    marginLeft: 8,
    backgroundColor: 'transparent',
    color: '#222',
  },
  headerIcon: {
    backgroundColor: '#004938',
    borderRadius: 20,
    padding: 8,
    marginLeft: 8,
  },
  promoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginTop: -32,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  promoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 12,
  },
  promoButton: {
    backgroundColor: '#FFD600',
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 8,
    alignSelf: 'flex-start',
  },
  promoButtonText: {
    color: '#004938',
    fontWeight: 'bold',
    fontSize: 14,
  },
  promoImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginLeft: 8,
  },
  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  quickAction: {
    alignItems: 'center',
    flex: 1,
  },
  quickActionIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
    backgroundColor: '#004938',
  },
  quickActionLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#004938',
    marginTop: 4,
  },
  categoriesRow: {
    marginVertical: 8,
    paddingLeft: 16,
  },
  categoryIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    padding: 10,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: '#E0E0E0',
    backgroundColor: '#fff',
    minWidth: 64,
  },
  categoryLabel: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 4,
    color: '#004938',
  },
  featuredSection: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#222',
  },
  productCard: {
    width: 200,
    borderRadius: 16,
    marginRight: 16,
    padding: 16,
    alignItems: 'flex-start',
    backgroundColor: '#222',
  },
  productImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 8,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  productName: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
    color: '#fff',
  },
  productPrice: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFD600',
    marginBottom: 8,
  },
  addToCartBtn: {
    backgroundColor: '#1DBF73',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: 'flex-end',
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
