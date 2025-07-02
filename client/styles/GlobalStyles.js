import { StyleSheet } from 'react-native';
import { Directions } from 'react-native-gesture-handler';

export const COLORS = {
  primary: '#04773B',
  primaryAccent: '#cc8800',
  backgroundPrimary: '#000000',
  backgroundSecondary: '#ffffff',
  text: 'black',
  textMuted: '#777777',
  white: '#ffffff',
  grayBorder: '#000000',
  red :'#E20105',
};

export const RADIUS = {
  r1: 5,
  r2: 16,
  r3: 24,
  r4: 40,
  r5: 999,
  r6: 40,
};

export const SIZES = {
  base: 16,
  large: 18,
  small: 14,
  heading: 55,
  subHeading: 40,
};

export const GlobalStyles = StyleSheet.create({
  appContainer: {
    flex: 1,
    position: 'relative',
  },
    content: {
    flex: 1,
    paddingTop: 90,  // מקום קבוע ל navbar
    alignItems: 'center',
    paddingHorizontal: 16,
   
  },
    textDefault: {
    textAlign: 'right',
    writingDirection: 'rtl', // מוודא שהכתיבה באמת מימין לשמאל
  },

  heading: {
    fontSize: SIZES.heading,
    fontWeight: '600',
    lineHeight: 55,
    color: COLORS.text,
  },
  subHeading: {
    fontSize: SIZES.subHeading,
    fontWeight: '500',
    lineHeight: 35,
    color: COLORS.text,
  },
  textMuted: {
    color: COLORS.textMuted,
  },
  btn: {
    color: COLORS.primary,
    borderRadius: RADIUS.r1,
    fontSize: SIZES.base,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: COLORS.primary,
    textAlign: 'center',
  },
  btnPrimary: {
    backgroundColor: COLORS.primary,
    color: COLORS.white,
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: RADIUS.r2,
    backgroundColor: COLORS.backgroundPrimary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    paddingVertical: 100,
    paddingHorizontal: 50,
  },
  flex: {
    flexDirection: 'row',
    gap: 16,
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 16,
  },
  navbarContainer: {
    position: "absolute",
    top: 0, // הצג את ה-navbar למעלה
    left: 0,
    right: 0,
    flexDirection: "row", // האייקונים יהיו אחד ליד השני
    justifyContent: "space-around", // מרחק שווה בין כל אייקון
    alignItems: "center", // מרכז האייקונים אנכית
    paddingVertical: 25, // רווחים למעלה ולמטה
    backgroundColor: "green", // צבע רקע
    borderBottomWidth: 1, // קו בתחתית
    borderBottomColor: "#ddd", // צבע הקו
    zIndex: 1000, // לדאוג שה-Navbar יישאר מעל תוכן אחר אם יש
  },
  iconBtn: {
    padding: 10, // רווח סביב האייקון
  },
  listButton: {
  width:"100%",
  backgroundColor: COLORS.primary,
  paddingVertical: 11,
  paddingHorizontal: 18,
  borderRadius: RADIUS.r2,
  marginVertical: 8,
  alignSelf: "center",
},
backButton: {
  alignSelf: "flex-start",
  marginVertical: 10,
  paddingVertical: 8,
  paddingHorizontal: 16,
  backgroundColor: "#f0f0f0",
  borderRadius: 8,
  borderWidth: 1,
  borderColor: "#ccc",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 2, // for Android
},

backButtonText: {
  fontSize: 16,
  color: "#333",
  fontWeight: "500",
},
});