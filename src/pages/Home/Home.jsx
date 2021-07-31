import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LayoutGrid, Flex, Box } from '../../components/structure';
import { FairyActions } from '../../store/fairy/fairy.duck';

const HomePage = () => {
  const dispatch = useDispatch();
  const { fairy } = useSelector((state) => state.fairyReducer);

  useEffect(() => {
    dispatch(FairyActions.getFairy());
  }, [dispatch]);

  return (
    <LayoutGrid>
      <Flex
        justifyContent="center"
        spaceBetween={16}
        marginBottom="16px"
        flexWrap="wrap"
      >
        {fairy.map(({ pokemon: pokemonItem }) => {
          const { name } = pokemonItem;
          return <Box key={name} name={name} marginBottom={16} />;
        })}
      </Flex>
    </LayoutGrid>
  );
};

export default HomePage;
