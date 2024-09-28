import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import axios from "axios";
import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from "react-native-google-mobile-ads";
import "expo-dev-client";

//subir eas build em desenvolvimento -> eas build --profile development

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const data = [
  { label: "Petrobras", value: "5" },
  { label: "Vale", value: "6" },
  { label: "Ambev", value: "7" },
  { label: "BRF", value: "8" },
  { label: "Itaúsa", value: "9" },
  { label: "Banco do Brasil", value: "12" },
  { label: "Dólar", value: "4" },
  { label: "Bitcoin", value: "1" },
  { label: "Ethereum", value: "2" },
  { label: "Dogecoin", value: "3" },
  { label: "BNB", value: "10" },
  { label: "Solana", value: "11" },
  { label: "Apple", value: "13" },
  { label: "Nvidia", value: "14" },
  // { label: "Sirius", value: "15" },
  { label: "Bando do Bradesco", value: "16" },
  // { label: "NIO", value: "17" },
  { label: "Advanced Micro Devices (AMD)", value: "18" },
  { label: "Palantir Technologies", value: "19" },
  // { label: "MARA", value: "20" },
  { label: "Intel Corporation", value: "21" },
  // { label: "RIVN", value: "22" },
  { label: "Amazon", value: "23" },
  { label: "AT&T", value: "24" },
  // { label: "CLSK", value: "25" },
  { label: "Walgreens Boots Alliance", value: "26" },
];

const adUnitId = __DEV__
  ? TestIds.INTERSTITIAL
  : "ca-app-pub-6668731572199276/5677635723";

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  keywords: ["fashion", "clothing"],
});

export default function HomeScreen() {
  const [value, setValue] = useState<string | null>(null);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [carregando, setCarregando] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isGet, setIsGet] = useState<Array<String>>([]);

  useEffect(() => {
    if (value) {
      getFortune();
      if (count === 1) {
        getAds();
      }
      setCount(count + 1);
    }
  }, [value]);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setLoaded(true);
      }
    );

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);

  const getAds = async () => {
    interstitial.show();
  };

  const getFortune = async () => {
    setShow(false);
    if (value === "3") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/DOGE");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "1") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/BTC");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "2") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/ETH");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "4") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/Dolar");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "5") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/PETR4");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "6") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/VALE3");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "7") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/ABEV3");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "8") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/BRFS3");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "9") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/ITSA4");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "10") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/BNB");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "11") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/SOL");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "12") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/BBAS3");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "13") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/AAPL");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "14") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/NVDA");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "15") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/SIRI");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "16") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/BBD");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "17") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/NIO");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "18") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/AMD");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "19") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/PLTR");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "20") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/MARA");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "21") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/INTC");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "22") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/RIVN");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "23") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/AMZN");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "24") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/T");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "25") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/CLSK");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    } else if (value === "26") {
      setCarregando(true);
      try {
        const response = await axios.get("https://fortuneapi.vercel.app/WBA");
        setIsGet(response.data);
        setShow(true);
        setError(false);
        setCarregando(false);
      } catch (error) {
        setShow(false);
        setError(true);
        setCarregando(false);
      }
    }
  };

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <ThemedText style={[styles.label, isFocus && { color: "blue" }]}>
          Dropdown label
        </ThemedText>
      );
    }
    return null;
  };

  return (
    <View style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#fff", dark: "#151718" }}
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title" style={{ textAlign: "center" }}>
            Fortune
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="subtitle">
            Ativos investidos nos últimos 2 anos!
          </ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Ativo:</ThemedText>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Selecione um item" : "..."}
            searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color={isFocus ? "blue" : "#000"}
                name="linechart"
                size={20}
              />
            )}
          />
        </ThemedView>
        {show && (
          <>
            <ThemedView style={styles.stepContainer}>
              <ThemedText type="subtitle">Resultado:</ThemedText>
              <ThemedText>Ativo: {isGet.Ativo}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
              <ThemedText>Preço: {isGet.Ativo.includes('USD') ? '$' : 'R$'} {isGet.Price}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
              <ThemedText>Performance do RSI: {isGet.RSI}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
              <ThemedText>Holding: {isGet.Holding}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
              <ThemedText type="subtitle">Compras e Vendas com RSI:</ThemedText>
              <FlatList
                data={isGet.Data}
                renderItem={({ item }) => (
                  <ThemedView style={styles.list}>
                    <ThemedText>Compra: {item[0].substring(0, 16)}</ThemedText>
                    <ThemedText>Venda: {item[1].substring(0, 16)}</ThemedText>
                    <ThemedText>
                      Porcentagem: {Math.round(item[2] * 100) / 100}%
                    </ThemedText>
                  </ThemedView>
                )}
                keyExtractor={(item) => item}
              />
            </ThemedView>
          </>
        )}
        {error && (
          <>
            <ThemedView style={styles.stepContainer}>
              <ThemedText type="subtitle">
                Error! Verifique sua internet ou o ativo está indisponível no
                momento.
              </ThemedText>
            </ThemedView>
          </>
        )}
        {carregando && (
          <>
            <ThemedView style={styles.stepContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
            </ThemedView>
          </>
        )}
      </ParallaxScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  list: {
    gap: 2,
    marginBottom: 20,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  dropdown: {
    height: 50,
    borderColor: "#fff",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
