//The functions only receive the navigation and route from the outside — so you shouldn't let it wrap the app like all the other contexts that were used there and had to wrap  This is just a helper function
export const handleClosePopups = (
  setIsMenuVisible,
  setIsNotificationsVisible
) => {
  setIsMenuVisible(false);
  setIsNotificationsVisible(false);
};

export const handleNavigateApp = (navigation, route, screenName, closeFunc) => {
  closeFunc(); // סגירת פופאפים
  if (route.name !== screenName) {
    navigation.navigate("App", { screen: screenName });
  }
};
export const handleNavigate = (navigation, route, screenName, closeFunc) => {
  closeFunc(); // סגירת פופאפים
  if (route.name !== screenName) {
    navigation.navigate({ screen: screenName });
  }
};
