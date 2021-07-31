import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LayoutGrid, Box } from '../../components/structure';
import { FairyActions } from '../../store/fairy/fairy.duck';

const HomePage = () => {
  const dispatch = useDispatch();
  const { fairy } = useSelector((state) => state.fairyReducer);

  useEffect(() => {
    dispatch(FairyActions.getFairy());
  }, [dispatch]);

  return (
    <LayoutGrid>
      {fairy.map(({ id, pokemon }) => (
        <Box key={id} name={pokemon.name} />
      ))}
    </LayoutGrid>
  );
};

export default HomePage;
