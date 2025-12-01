import { useColorScheme } from '@/hooks/use-color-scheme';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CART_ITEMS = [
  {
    id: '1',
    title: 'Fresh Local Oranges 5kg',
    price: 1250,
    image: require('@/assets/images/cart.png'),
    quantity: 1,
    unit: 'Pack',
    rating: 4.7,
  },
  {
    id: '2',
    title: 'Organic Rice 5kg',
    price: 280,
    image: require('@/assets/images/cart.png'),
    quantity: 1,
    unit: 'Pack',
    rating: 4.5,
  },
  {
    id: '3',
    title: 'Organic Rice',
    price: 1390,
    image: require('@/assets/images/cart.png'),
    quantity: 2,
    unit: 'Units',
    rating: 4.2,
  },
];

export default function Cart() {
  const colorScheme = useColorScheme() ?? 'light';
  const bg = colorScheme === 'dark' ? '#232323' : '#fff';
  const cardBg = colorScheme === 'dark' ? '#151718' : '#fff';
  const textColor = colorScheme === 'dark' ? '#fff' : '#184D3A';
  const subText = colorScheme === 'dark' ? '#B0B0B0' : '#687076';
  const inputBg = colorScheme === 'dark' ? '#232323' : '#F5F5F5';
  const [cart, setCart] = useState(CART_ITEMS);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 1390;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: bg }]}>  
      <ScrollView contentContainerStyle={{ padding: 20 }} showsVerticalScrollIndicator={false}>
        <Text style={[styles.title, { color: '#2ECC40' }]}>My Cart</Text>
        {/* Cart Items */}
        <View style={styles.cartList}>
          {cart.map((item, idx) => (
            <View key={item.id} style={[styles.cartCard, { backgroundColor: cardBg }]}> 
              <Image source={item.image} style={styles.cartImage} />
              <View style={styles.cartInfo}>
                <Text style={[styles.cartItemTitle, { color: textColor }]}>{item.title}</Text>
                <View style={styles.ratingRow}>
                  <Text style={styles.ratingText}>{item.rating}</Text>
                  <Text style={styles.star}>★ ★ ★ ★ ★</Text>
                </View>
                <Text style={[styles.cartPrice, { color: subText }]}>GHS {item.price.toFixed(2)}</Text>
                <View style={styles.qtyRow}>
                  <Text style={styles.qtyText}>{item.quantity} {item.unit}</Text>
                  <TouchableOpacity style={styles.qtyBtn}><Text style={styles.qtyBtnText}>+</Text></TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
        {/* Subtotal & Delivery */}
        <View style={styles.summaryBox}>
          <View style={styles.summaryRow}>
            <Text style={[styles.summaryLabel, { color: textColor }]}>Subtotal:</Text>
            <Text style={[styles.summaryValue, { color: textColor }]}>GHS {subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={[styles.summaryLabel, { color: textColor }]}>Delivery Fee</Text>
            <Text style={[styles.summaryValue, { color: textColor }]}>GHS {deliveryFee.toFixed(2)}</Text>
          </View>
        </View>
        {/* Actions */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.addToCartBtn}>
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyNowBtn}>
            <Text style={styles.buyNowText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 8,
  },
  cartList: {
    marginBottom: 20,
  },
  cartCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  cartImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 12,
  },
  cartInfo: {
    flex: 1,
  },
  cartItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingText: {
    fontSize: 14,
    color: '#FFD600',
    marginRight: 4,
  },
  star: {
    fontSize: 14,
    color: '#FFD600',
  },
  cartPrice: {
    fontSize: 14,
    marginBottom: 4,
  },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyText: {
    fontSize: 14,
    fontWeight: '600',
    marginRight: 8,
  },
  qtyBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#2ECC40',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qtyBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  summaryBox: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  actionRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  addToCartBtn: {
    flex: 1,
    backgroundColor: '#2ECC40',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginRight: 8,
  },
  addToCartText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buyNowBtn: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#2ECC40',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginLeft: 8,
    backgroundColor: 'transparent',
  },
  buyNowText: {
    color: '#2ECC40',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
