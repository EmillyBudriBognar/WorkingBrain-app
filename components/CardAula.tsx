import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface CardProps {
  imageUrl: any; // Permitir tanto require quanto uri string
  title: string;
  subtitle: string;
  tags: { label: string; color: string }[];
}

const CardAula: React.FC<CardProps> = ({ imageUrl, title, subtitle, tags }) => {
  // Verificar se o imageUrl é uma string (URI) ou um require()
  const imageSource = typeof imageUrl === 'string' ? { uri: imageUrl } : imageUrl;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        {/* Agora a fonte de imagem pode ser tanto uma URI quanto um require */}
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <View style={styles.tagContainer}>
          {tags.map((tag, index) => (
            <Text key={index} style={{ ...styles.tag, backgroundColor: tag.color }}>
              {tag.label}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: "#fff",
    margin: 15,
    marginTop: 2,
    marginRight: 0,
    alignItems: "center", // Centraliza o conteúdo verticalmente
  },
  imageContainer: {
    width: 100,
    height: 130,
    margin: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  contentContainer: {
    padding: 10,
    flex: 1,
    alignItems: "center", // Centraliza o conteúdo horizontalmente
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5, // Espaçamento entre título e subtítulo
    marginTop: 15,
    textAlign: "center", // Centraliza o texto no card
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 15, // Espaçamento abaixo do subtítulo
    textAlign: "center", // Centraliza o texto no card
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center", // Centraliza as tags no card
    marginBottom: 10,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 5,
    marginBottom: 5, // Espaçamento entre os itens de tag
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default CardAula;
