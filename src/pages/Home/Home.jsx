import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LayoutGrid from '../../components/structure/LayoutGrid/LayoutGrid';
import { FairyActions } from '../../store/fairy/fairy.duck';

const HomePage = () => {
  const dispatch = useDispatch();
  const { fairy } = useSelector((state) => state.fairyReducer);
  console.log(fairy);

  useEffect(() => {
    dispatch(FairyActions.getFairy());
  }, [dispatch]);

  return <LayoutGrid>Teste</LayoutGrid>;
};

export default HomePage;
