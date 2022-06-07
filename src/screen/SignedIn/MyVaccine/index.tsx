/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, Pressable, StatusBar} from 'react-native';
import {useTheme} from 'styled-components';
import Button from '~/components/Button';
import HeaderOptions from '~/components/HeaderOptions';
import Icon from '~/components/Icon';
import Input from '~/components/Input';
import Separator from '~/components/Separator';
import Text from '~/components/Text';
import VaccineCard from '~/components/VaccineCard';
import {Container, RowFilterVaccine} from './styles';
import {FilterVaccine} from './types';

const MyVaccine: React.FC = () => {
  const {goBack} = useNavigation();
  const {spacing} = useTheme();

  /**
   * States
   */
  const [togleFilter, setTogleFilter] = useState<FilterVaccine>('all');
  const [searchInput, setSearchInput] = useState('');
  const handleTogleFilter = () => {
    setTogleFilter(old => (old === 'all' ? 'next' : 'all'));
  };

  return (
    <Container>
      <StatusBar barStyle={'dark-content'} />
      <HeaderOptions
        left={
          <Pressable onPress={goBack}>
            <Icon icon="back" size={15} />
          </Pressable>
        }
      />
      <Text typography="h7">Minhas Vacinas</Text>
      <Separator height={spacing.md} />
      <Input
        icon="search"
        iconPosition="left"
        iconColor="lightGreen"
        placeholder="Busca de Vacinas"
        onChangeText={setSearchInput}
        value={searchInput}
      />
      <Separator height={spacing.ty} />
      <RowFilterVaccine>
        <Button
          mode={togleFilter === 'all' ? 'contained' : 'outlined'}
          paddingVertical={8}
          paddingHorizontal={20}
          onPress={handleTogleFilter}>
          Todas
        </Button>
        <Separator width={12} />
        <Button
          mode={togleFilter === 'next' ? 'contained' : 'outlined'}
          paddingVertical={8}
          paddingHorizontal={20}
          onPress={handleTogleFilter}>
          Próximas Vacinas
        </Button>
      </RowFilterVaccine>
      <Separator height={15} />
      <FlatList
        data={[1,2,3,4,5]}
        keyExtractor={item => `${item}`}
        ItemSeparatorComponent={() => <Separator height={15} />}
        ListFooterComponent={() => <Separator height={15} />}
        renderItem={({item}) => {
          return (
            <VaccineCard
              key={item}
              date={
                togleFilter === 'all'
                  ? new Date(2022,7,6).toISOString()
                  : new Date(2021,7,6).toISOString()
              }
              shot={item * 2 === 0 ? "second-dose" : 'first-dose' }
              title={togleFilter === 'all' ? 'Johnson' : 'Covid' }
            />
          );
        }}
      />
    </Container>
  );
};

export default MyVaccine;
