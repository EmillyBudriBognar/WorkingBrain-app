import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface CardProps {
  imageUrl: any; // Permitir tanto require quanto uri string
  title: string;
  subtitle: string;
  progress: number; 
  tags: { label: string; color: string }[];
  layout?: 'large' | 'small'; // Prop para definir o layout do card
}

const CardInscricoes: React.FC<CardProps> = ({
  imageUrl,
  title,
  subtitle,
  progress,
  tags,
  layout = 'large',
}) => {
  // Verificar se o imageUrl é uma string (URI) ou um require()
  const imageSource = typeof imageUrl === 'string' ? { uri: imageUrl } : imageUrl;

  // Determinar estilo do card com base no layout
  const cardStyle = layout === 'large' ? styles.cardLarge : styles.cardSmall;
  const imageStyle = layout === 'large' ? styles.imageLarge : styles.imageSmall;

  return (
    <View style={[styles.cardContainer, cardStyle]}>
      <Image source={imageSource} style={imageStyle} />
      <View style={styles.contentContainer}>
        {layout === 'large' ? (
          // Layout para card grande
          <>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
              <View style={styles.tagContainer}>
                {tags.map((tag, index) => (
                  <Text key={index} style={[styles.tag, { backgroundColor: tag.color }]}>
                    {tag.label}
                  </Text>
                ))}
              </View>
            </View>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: `${progress}%` }]} />
            </View>
          </>
        ) : (
          // Layout para card pequeno
          <>
            <Text style={styles.smallTitle}>{title}</Text>
            <Text style={styles.smallSubtitle}>{subtitle}</Text>
            <View style={styles.smallTagContainer}>
              {tags.map((tag, index) => (
                <Text key={index} style={[styles.tag, { backgroundColor: tag.color }]}>
                  {tag.label}
                </Text>
              ))}
            </View>
            <View style={[styles.progressBar, styles.smallProgressBar]}>
              <View style={[styles.progress, { width: `${progress}%` }]} />
            </View>
          </>
        )}
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
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  cardLarge: {
    width: '90%', // Ajuste de largura para não ocupar toda a tela
    alignSelf: 'center', // Centraliza o card grande
    height: 250, // Limita a altura máxima do card grande
    marginBottom: 5, // Espaçamento entre o card grande e os pequenos
  },
  cardSmall: {
    width: '45%', // Largura para os cards menores
    marginHorizontal: '2.5%', // Margem horizontal para espaçamento uniforme entre os dois cards pequenos
  },
  imageLarge: {
    width: "100%",
    height: 150, // Tamanho grande para a imagem no topo
    resizeMode: "cover",
  },
  imageSmall: {
    width: "100%",
    height: 100, // Tamanho menor para a imagem
    resizeMode: "cover",
  },
  contentContainer: {
    padding: 10,
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row', // Coloca título e tags lado a lado
    justifyContent: 'space-between', // Distribui espaço entre título e tags
    alignItems: 'center', // Alinha verticalmente
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2, // Espaçamento entre título e subtítulo
    flex: 1, // Faz com que o título use o espaço restante
  },
  smallTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 2, // Espaçamento entre título e subtítulo
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10, // Espaçamento abaixo do subtítulo
  },
  smallSubtitle: {
    fontSize: 12,
    color: "#666",
    marginBottom: 5, // Espaçamento abaixo do subtítulo para card pequeno
  },
  tagContainer: {
    flexDirection: "row",
    justifyContent: "flex-end", // Alinha as tags à direita
    flexWrap: "wrap",
  },
  smallTagContainer: {
    flexDirection: "row",
    flexWrap: "wrap", // Permite que as tags se movam para a linha seguinte se necessário
    marginTop: 5, // Margem acima das tags
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
  progressBar: {
    height: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    overflow: "hidden",
  },
  smallProgressBar: {
    marginTop: 8, // Adiciona margem superior ao progress bar dos cards pequenos
  },
  progress: {
    height: "100%",
    backgroundColor: "#4caf50",
  },
});

export default CardInscricoes;
