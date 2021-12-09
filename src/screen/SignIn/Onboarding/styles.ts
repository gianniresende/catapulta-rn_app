import styled from 'styled-components/native';
import Icon from '~/components/Icon';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  margin-left: ${({theme}) => theme.spacing.lg}px;
  margin-right: ${({theme}) => theme.spacing.lg}px;
  margin-top: ${({theme}) => theme.spacing.md}px;
`;

export const ContainerColum = styled.View``;

export const Doctor = styled(Icon)`
  align-self: center;
`;
