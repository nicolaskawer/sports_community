import { AntDesign, FontAwesome, Feather, Entypo } from '@expo/vector-icons';

export const navigations = [
  {
    id: 0,
    iconLib: FontAwesome,
    iconName: "soccer-ball-o", // כדורגל ללוגו
    to: "logo", // זה יכול להיות מסך ראשי או סתם ייצוג של הלוגו
  },
  {
    id: "menuButton",
    iconLib: Entypo,
    iconName: "dots-three-vertical", // תפריט של שלוש נקודות מאונכות
    to: "menu", // תוכל לכוון אותו למסך הגדרות או תפריט צד
  },
  
  
  
]
export const games = [
  {
    id: 1,
    match: "הפועל נגד מכבי",
    time: "8:00 בבוקר",
    location: "בלומפילד",
    medicAvailable: false, // חסר חובש
  },
  {
    id: 2,
    match: "גדנע נגד מכבי חיפה",
    time: "20:30",
    location: "טדי",
    medicAvailable: true, // חובש זמין
  },
  {
    id: 3,
    match: "מכבי תל אביב נגד הפועל באר שבע",
    time: "17:00",
    location: "סמי עופר",
    medicAvailable: false,
  },
  { id: "button", type: "button" }
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

;
