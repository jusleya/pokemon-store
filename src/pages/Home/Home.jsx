import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LayoutGrid, Flex, Box } from '../../components/structure';
import { FairyActions } from '../../store/fairy/fairy.duck';

const HomePage = () => {
  const dispatch = useDispatch();
  const { fairy } = useSelector((state) => state.fairyReducer);
  console.log(fairy);

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
        {fairy.map(({ id, pokemon }) => (
          <Box key={id} name={pokemon.name} marginBottom={16} />
        ))}
      </Flex>
    </LayoutGrid>
  );
};

export default HomePage;
