import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import { useEffect, useState, useRef } from "react";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
  const [valini, onValIni] = useState<string>();
  const [valmen, onValMen] = useState<string>();
  const [juros, onJuros] = useState<string>();
  const [periodo, onPeriodo] = useState<string>();
  const [resultado, onResultado] = useState<string>();
  const [investing, onInvesting] = useState<string>();
  const [totalJuros, onTotalJuros] = useState<string>();
  const [modalVisibleJuros, setModalVisibleJuros] = useState<boolean>(false);
  const [modalVisiblePeriodo, setModalVisiblePeriodo] =
    useState<boolean>(false);
  const [selectedJuros, setSelectedJuros] = useState<string>("Anual");
  const [selectedPeriod, setSelectedPeriod] = useState<string>("Anual");
  const [dropdownJuros, setDropdownJuros] = useState({
    top: 0,
    left: 0,
    width: 200,
  });
  const [dropdownPeriodo, setDropdownPeriodo] = useState({
    top: 0,
    left: 0,
    width: 200,
  });
  const buttonRefJuros = useRef<any>(null);
  const buttonRefPeriodo = useRef<any>(null);
  const items = ["Anual", "Mensal"];

  const openDropdownJuros = () => {
    if (buttonRefJuros.current) {
      buttonRefJuros.current.measure(
        (
          _fx: number,
          _fy: number,
          width: number,
          height: number,
          px: number,
          py: number
        ) => {
          setDropdownJuros({
            top: py + height,
            left: px,
            width: width,
          });
          setModalVisibleJuros(true);
        }
      );
    }
  };

  const openDropdownPeriodo = () => {
    if (buttonRefPeriodo.current) {
      buttonRefPeriodo.current.measure(
        (
          _fx: number,
          _fy: number,
          width: number,
          height: number,
          px: number,
          py: number
        ) => {
          setDropdownPeriodo({
            top: py + height,
            left: px,
            width: width,
          });
          setModalVisiblePeriodo(true);
        }
      );
    }
  };

  const renderItemJuros = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        setSelectedJuros(item);
        setModalVisibleJuros(false);
      }}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  const renderItemPeriodo = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        setSelectedPeriod(item);
        setModalVisiblePeriodo(false);
      }}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    if (
      valini &&
      valmen &&
      juros &&
      periodo &&
      !isNaN(parseFloat(valini)) &&
      !isNaN(parseFloat(valmen)) &&
      !isNaN(parseFloat(juros)) &&
      !isNaN(parseFloat(periodo))
    ) {
      const valor = parseFloat(valini);
      const valorMensal = parseFloat(valmen);
      const taxa = parseFloat(juros) / 100;
      const periodos = parseInt(periodo);
      var investido = valor;
      let valorFinal = valor;
      var meses = periodos;
      if (selectedPeriod === "Anual") {
        meses = periodos * 12;
      }
      var jurosMensal = taxa;
      if (selectedJuros === "Anual") {
        jurosMensal = (1 + jurosMensal) ** (1 / 12) - 1;
      }
      for (let i = 0; i < meses; i++) {
        valorFinal = valorFinal * (1 + jurosMensal) + valorMensal;
        investido += valorMensal;
      }
      let valor_final = valorFinal - investido
      onResultado(String(valorFinal.toFixed(2)));
      onInvesting(String(investido.toFixed(2)));
      onTotalJuros(String(valor_final.toFixed(2)));
    }
  }, [valini, valmen, juros, periodo, selectedJuros, selectedPeriod]);

  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#fff", dark: "#151718" }}
      >
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Juros Composto</ThemedText>
        </ThemedView>
        <View style={styles.container}>
          <View>
            <ThemedText type="subtitle">Valor Inicial:</ThemedText>
            <TextInput
              style={styles.input}
              // onChangeText={onValIni}
              onChangeText={(texto) => {
                const numero = texto.replace(/[^\d]/g, '').padStart(0, '0');
                const formatado = numero.slice(0, -2) + '.' + numero.slice(-2);
                onValIni(formatado);
              }}
              value={valini}
              placeholder="0.00"
              keyboardType="numeric"
            />
          </View>
          <View>
            <ThemedText type="subtitle">Valor Mensal:</ThemedText>
            <TextInput
              style={styles.input}
              // onChangeText={onValMen}
              onChangeText={(texto) => {
                const numero = texto.replace(/[^\d]/g, '').padStart(0, '0');
                const formatado = numero.slice(0, -2) + '.' + numero.slice(-2);
                onValMen(formatado);
              }}
              value={valmen}
              placeholder="0.00"
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <ThemedText type="subtitle">Taxa de juros:</ThemedText>
            <TextInput
              style={styles.input}
              // onChangeText={onJuros}
              onChangeText={(texto) => {
                const numero = texto.replace(/[^\d]/g, '').padStart(0, '0');
                const formatado = numero.slice(0, -2) + '.' + numero.slice(-2);
                onJuros(formatado);
              }}
              value={juros}
              placeholder="0.00"
              keyboardType="numeric"
            />
          </View>
          <View>
            <ThemedText type="subtitle">A taxa de juros é:</ThemedText>
            <TouchableOpacity
              ref={buttonRefJuros}
              style={styles.button}
              onPress={openDropdownJuros}
            >
              <Text>{selectedJuros || "Anual"}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <ThemedText type="subtitle">Período de:</ThemedText>
            <TextInput
              style={styles.input}
              // onChangeText={onPeriodo}
              onChangeText={(texto) => {
                const apenasNumeros = texto.replace(/[^\d]/g, '');
                const semZerosEsquerda = apenasNumeros.replace(/^0+(?!$)/, '');
                onPeriodo(semZerosEsquerda);
              }}
              value={periodo}
              placeholder="2"
              keyboardType="numeric"
            />
          </View>
          <View>
            <ThemedText type="subtitle">O período é em:</ThemedText>
            <TouchableOpacity
              ref={buttonRefPeriodo}
              style={styles.button}
              onPress={openDropdownPeriodo}
            >
              <Text>{selectedPeriod || "Anual"}</Text>
            </TouchableOpacity>
          </View>
        </View>
        {resultado && (
          <>
          <ThemedView style={[styles.titleContainer, { width: '100%', alignItems: 'center', justifyContent: 'center' }]}>
            <View style={styles.square}>
              <ThemedText type="subtitle" style={{ textAlign: 'center' }}>Valor Total Final: {resultado}</ThemedText>
            </View>
          </ThemedView>
          <ThemedView style={[styles.titleContainer, { width: '100%', alignItems: 'center', justifyContent: 'center' }]}>
            <View style={styles.square}>
              <ThemedText type="subtitle" style={{ textAlign: 'center' }}>Valor Total Investido: {investing}</ThemedText>
            </View>
          </ThemedView>
          <ThemedView style={[styles.titleContainer, { width: '100%', alignItems: 'center', justifyContent: 'center' }]}>
            <View style={styles.square}>
              <ThemedText type="subtitle" style={{ textAlign: 'center' }}>Valor Total de Juros: {totalJuros}</ThemedText>
            </View>
          </ThemedView>
          </>
        )}
      </ParallaxScrollView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisibleJuros}
        onRequestClose={() => setModalVisibleJuros(false)}
      >
        <View
          style={[
            styles.dropdown,
            {
              top: dropdownJuros.top - 32,
              left: dropdownJuros.left,
              width: dropdownJuros.width,
            },
          ]}
        >
          <FlatList
            data={items}
            renderItem={renderItemJuros}
            keyExtractor={(item) => item}
            style={styles.flatList}
          />
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisiblePeriodo}
        onRequestClose={() => setModalVisiblePeriodo(false)}
      >
        <View
          style={[
            styles.dropdown,
            {
              top: dropdownPeriodo.top - 32,
              left: dropdownPeriodo.left,
              width: dropdownPeriodo.width,
            },
          ]}
        >
          <FlatList
            data={items}
            renderItem={renderItemPeriodo}
            keyExtractor={(item) => item}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignItems: "flex-end",
  },
  input: {
    width: 150,
    height: 40,
    margin: 6,
    borderWidth: 1,
    borderColor: "#808080",
    padding: 10,
    backgroundColor: "#ffffff",
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  button: {
    backgroundColor: "#ffffff",
    borderColor: "#808080",
    borderWidth: 1,
    borderRadius: 5,
    width: 150,
    margin: 6,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minWidth: 250,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  dropdown: {
    position: "absolute",
    backgroundColor: "white",
    width: 200,
    borderRadius: 6,
    shadowColor: "#000000",
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
  },
  flatList: {
    maxHeight: 200,
  },
  square: {
    width: 200,
    marginTop: 20,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
});
