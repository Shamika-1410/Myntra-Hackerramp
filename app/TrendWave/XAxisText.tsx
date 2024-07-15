import React from 'react';
import { Text, Skia, useFont } from '@shopify/react-native-skia';
import {
  SharedValue,
  useDerivedValue,
} from 'react-native-reanimated';

type Props = {
  x: number;
  y: number;
  text: string;
  selectedBar: SharedValue<string | null>;
};

const XAxisText = ({ x, y, text, selectedBar }: Props) => {
  const textColor = useDerivedValue(() => {
    return selectedBar.value === text ? '#ff6346' : '#000';
  });

  const font = useFont(require("../../assets/fonts/SpaceMono-Regular.ttf"), 8);

  const maxLineLength =3; 
  const splitText = (text: string, maxLength: number) => {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';

    words.forEach((word) => {
      if ((currentLine + word).length <= maxLength) {
        currentLine += `${word} `;
      } else {
        lines.push(currentLine.trim());
        currentLine = `${word} `;
      }
    });

    if (currentLine) {
      lines.push(currentLine.trim());
    }

    return lines;
  };

  const lines = splitText(text, maxLineLength);

  return (
    <>
      {lines.map((line, index) => (
        <Text
          font={font}
          key={index}
          x={x}
          y={y + index * 14} 
          color={textColor.value}
          text={line}
          
        />
      ))}
    </>
  );
};

export default XAxisText;