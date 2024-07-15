import React from 'react';
import { Path, Skia } from '@shopify/react-native-skia';
import {
  SharedValue,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  x: number;
  y: number;
  barWidth: number;
  progress: SharedValue<number>;
  graphHeight: number;
  label: string;
  selectedBar: SharedValue<string | null>;
  color: string; 
};

const BarPath = ({
  x,
  y,
  progress,
  barWidth,
  graphHeight,
  label,
  selectedBar,
  color, 
}: Props) => {
  const barColor = useDerivedValue(() => {
    if (selectedBar.value === label) {
      return withTiming(color);
    } else if (selectedBar.value === null) {
      return withTiming(color);
    } else {
      return withTiming(color);
    }
  });

  const path = useDerivedValue(() => {
    const barPath = Skia.Path.Make();

    barPath.addRRect({
      rect: {
        x: x-barWidth ,
        y: graphHeight,
        width: barWidth,
        height: y * progress.value * -1,
      },
      rx: 8,
      ry: 8,
    });

    return barPath;
  });

  return <Path path={path} color={barColor} />;
};

export default BarPath;