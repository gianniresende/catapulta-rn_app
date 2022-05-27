import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import Text from '~/components/Text';

export const Container = styled.View`
  height: 115px;
  width: 115px;
  justify-content: center;
  align-items: center;
  border-radius: ${({theme}) => theme.borders.radius.sm}px;
  background-color: ${({theme}) => theme.colors.background.main};
`;

export const Circle = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.primary.main};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const Title = styled(Text)`
  text-align: center;
`;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 0.22,
    elevation: 3,
  },
});

export default styles;
