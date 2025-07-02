import { AntDesign, FontAwesome, Feather, Entypo,  } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";

export const navigations = [

  {
    id: "logo",
    iconLib: "FontAwesome",
    iconName: "soccer-ball-o",
    isStatic: true, // אין ניווט, סתם תצוגה
  },
  {
    id: "menuButton",
    iconLib: "Entypo",
    iconName: "dots-three-vertical",
    to: "menu",
  },
  {
    id: "search",
    iconLib: "Feather",
    iconName: "search",
    to: "Search",
  },
];




export const games = [
  {
    id: 1,
    match: "הפועל תל אביב - מכבי תל אביב",
    time: "10.8.2025 | 19:00",
    location: "בלומפילד",
    medicAvailable: false, // חסר חובש
  },
  {
    id: 2,
    match: "גדנע - מכבי חיפה",
    time: "8.8.2025 | 21:00",
    location: "תל אביב יפו - כתובת מגרש",
    medicAvailable: true, // חובש זמין
  },
  {
    id: 3,
    match: "מכבי תל אביב נגד הפועל באר שבע",
    time: "1.8.2025 | 17:00",
    location: "באר שבע - כתובת מגרש",
    medicAvailable: false,
  },
  {
    id: 4,
    match: "הפועל צפרירים - מכבי נתניה",
    time: "10.10.2025 | 20:30",
    location: "נתניה - כתובת מגרש",
    medicAvailable: true, // חובש זמין
  },
  {
    id: 5,
    match: "מכבי יפו - מכבי פתח תקווה",
    time: "25.8.2025 | 17:00",
    location: "יפו - כתובת מגורים",
    medicAvailable: false,
  },
  
];
export const actionButtons = [
  {
    id: "medic",
    emoji: "🩺",
    label: "שיבוץ חובש",
    screen: "MedicAssignment",
  },
  {
    id: "transport",
    emoji: "🚌",
    label: "הסעות",
    screen: "Transport",
  },
  {
    id: "photo",
    emoji: "📸",
    label: "צילום",
    screen: "Photography",
  },
  {
    id: "equipment",
    emoji: "💊",
    label: "ציוד רפואי",
    screen: "MedicalEquipment",
  },
];
export const people = [
  {
    email : "nicolaskawer@gmail.com",
    password: "12345678"
  },
  {
    email : "d@gmail.com",
    password: "12345678"
  }
]
export const medic = [
  {
    email : "ni@gmail.com",
    name : " ניקולס החובש המקצועי",
    rating :"עושה עבודה יסודית אך יקר"
  },
  {
    email : "n1@gmail.com",
    name: "דניאל החובש המקמבן",
    rating :" זול אבל לא עושה עבודה טובה. נ.ב מעשן על ילדים"
  },
  {
        email : "e@gmail.com",
    name: "סיזאר",
    rating :"התחיל להתאמן אצל מאמן איגרוף יש פוטנציאל ללמידת חבישה אחרי שיקבל מכות"
  }
]

;
