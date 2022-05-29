/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import { isBefore } from 'date-fns';
import { format } from 'date-fns/esm';
import is from 'date-fns/esm/locale/is/index.js';
import React, { useMemo } from 'react';
import {Pressable, View} from 'react-native';
import { useTheme } from 'styled-components';
import { orange } from '~/constants/styles/colors';
import Icon from '../Icon';
import Separator from '../Separator';
import Text from '../Text';
import styles, {BadgeLeft, Chip, ChipWrap, Container, VaccineDate} from './styles';

const VaccineCard = ({title, date, shot, onPress}: VaccineCardProps) => {
  const isBeforeToday = useMemo(() => {
    console.log(format(new Date(), 'dd/MM/yy'));
    return isBefore(new Date(date), new Date());
  }, [date]);

  const formattedDate = useMemo(() => {
    return format(new Date(date), 'dd/MM/yy');

  }, [date]);
  if (isBeforeToday){
    console.log(formattedDate, isBeforeToday);
  } else {
    //console.log(formattedDate);
  }

  const {colors} = useTheme();

  const dose = useMemo(() => {
    switch (shot) {
      case 'first-dose':
        return {
          color: colors.primary.main,
          title: '1 dose',
        }
      case 'second-dose':
        return {
          color: colors.orange.main,
          title: '2 dose',
        }
      default:
        return {
          color: colors.secondary.main,
          title: 'dose única',
        }
    }

  }, [shot, colors]);
  return (
    <Pressable onPress={onPress} style={styles.shadow}>
      <Container>
        <BadgeLeft color={isBeforeToday ? colors.lightGreen.main : colors.orange.main} />
        <View>
          <Text typography="body2">{title}</Text>
          <Separator height={18} />
          <ChipWrap>
            <Chip color={dose.color}>
              <Text color="background">{dose.title}</Text>
            </Chip>
          </ChipWrap>
        </View>
        <VaccineDate>
          <Icon icon="calendar" size={20} />
          <Separator width={10} />
          <Text>{formattedDate}</Text>
        </VaccineDate>
      </Container>
    </Pressable>
  );
};

export default VaccineCard;
