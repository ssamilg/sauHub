import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

const CardList = ({ title , description }) => (
  <Card style={styles.card}>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Content>
      <Title>{title}</Title>
      <Paragraph>{description}</Paragraph>
    </Card.Content>
  </Card>
);

const styles = {
    card:{
        margin:5,
    }
};

export {CardList};