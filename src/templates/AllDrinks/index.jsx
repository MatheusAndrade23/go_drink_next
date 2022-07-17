import * as Styled from '../Kinds/styles';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { db } from '../../services/api';

import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { ReturnButton } from '../../components/ReturnButton';
import { DrinkComponent } from '../../components/DrinkComponent';
import { ButtonComponent } from '../../components/ButtonComponent';

import config from '../../config';

export const AllDrinks = ({ drinks }) => {
  const { t } = useTranslation();

  return (
    <main>
      <Header />
      <Styled.Container>
        <Heading size="small" as="h4">
          {`${t('headerLinkADrinks')}:`}
        </Heading>
        <Styled.DrinksContainer>
          {drinks.map((drink) => (
            <DrinkComponent drink={drink} key={drink.idDrink} />
          ))}
        </Styled.DrinksContainer>
      </Styled.Container>
      <ReturnButton />
    </main>
  );
};
