import React from 'react';
import {TouchableOpacity} from 'react-native';
import {SvgProps} from 'react-native-svg';

import {styles} from './style';

type CategoryBoxTypes = {
  imageColor: string;
  backgroundColor: string;
  Item: React.FC<SvgProps>;
};

const CategoryBox: React.FC<CategoryBoxTypes> = ({
  imageColor,
  Item,
  backgroundColor,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.categoryBox, {backgroundColor: backgroundColor}]}>
      <Item fill={imageColor} />
    </TouchableOpacity>
  );
};

export default CategoryBox;
