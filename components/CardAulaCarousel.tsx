import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import CardAula from "./CardAula"; 

const CardAulaCarousel: React.FC = () => {

  const cards = [
    {
      imageUrl: require('../assets/images/quimica.jpeg'), 
      title: "Introdução à Química",
      subtitle: "Prof Patrícia Ladeira",
      tags: [
        { label: "química", color: "#A3D8A2" },
        { label: "fuvest", color: "#CF906F" }
      ]
    },
    {
      imageUrl: require('../assets/images/literatura.jpg'),
      title: "Escolas Literárias",
      subtitle: "Prof Marcos Soares",
      tags: [
        { label: "Literatura", color: "#B99EF1" },
        { label: "fuvest", color: "#CF906F" }
      ]
    },
    {
      imageUrl: require('../assets/images/geografia.jpeg'),
      title: "Fontes de Energia",
      subtitle: "Prof Silvana Castro",
      tags: [
        { label: "Geografia", color: "#A5D6A7" },
        { label: "Enem", color: "#F8CEF9" }
      ]
    },
    {
      imageUrl: require('../assets/images/historia.jpg'),
      title: "Brasil Colônia I",
      subtitle: "Prof Vinícius Cardoso",
      tags: [
        { label: "História", color: "#D7CCC8" },
        { label: "fuvest", color: "#CF906F" }
      ]
    },
    {
      imageUrl: require('../assets/images/fisica.jpeg'),
      title: "Termodinâmica",
      subtitle: "Prof Gisele Alves",
      tags: [
        { label: "Física", color: "#CFD8DC" },
        { label: "Enem", color: "#F8CEF9" }
      ]
    }
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {cards.map((card, index) => (
        <CardAula
          key={index}
          imageUrl={card.imageUrl}
          title={card.title}
          subtitle={card.subtitle}
          tags={card.tags}
        />
      ))}
    </ScrollView>
  );
};

export default CardAulaCarousel;
