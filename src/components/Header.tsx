import React from 'react';
import { 
  View, 
  Text, 
  StatusBar, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';

interface HeaderProps {
  theme: boolean; 
  onUserAction(): void;
}

export function Header({ theme, onUserAction }: HeaderProps) {
  return (
    <View style={[
      styles.header,
      { backgroundColor: theme ? '#191932' : '#273FAD' },
    ]}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      <TouchableOpacity style={styles.headerButton} activeOpacity={0.7} onPress={onUserAction}>
        <Text style={styles.headerButtonText}>
          {theme === true ? 'DARK' : 'LIGHT'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    // backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  headerButton: {
    position: 'absolute',
    right: 20,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5
  },
  headerButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
