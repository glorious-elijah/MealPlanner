import { View, Text, StyleSheet } from "react-native";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

const HomeScreen = (): JSX.Element => {
  const { t, i18n } = useTranslation();

  const changeLanguage = useCallback(() => {
    console.log(i18n.language);

    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en").catch((e) => {
      console.error("Error changing language");
      return e;
    });
  }, [i18n]);

  return (
    <View style={styles.container}>
      <Text onPress={changeLanguage} style={styles.text}>
        {t("messages.welcome")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HomeScreen;
