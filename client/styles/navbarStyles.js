// navbarStyles.js
import { StyleSheet } from 'react-native';
import { COLORS } from './SignUpStyles'; 

export const NavbarStyles = StyleSheet.create({
  navbarContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'green',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    zIndex: 1000,
  },
  iconBtn: {
    padding: 10,
  },
});
