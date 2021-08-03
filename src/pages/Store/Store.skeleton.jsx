import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Flex } from '../../components/structure';

import * as S from './Store.style';

export const StoreSkeleton = () => (
  <>
    <S.Content spaceBetween={16}>
      <Skeleton
        duration={0.8}
        width="200px"
        height="350px"
        style={{ marginBottom: '16px' }}
      />
      <Skeleton duration={0.8} width="200px" height="350px" />
      <Skeleton duration={0.8} width="200px" height="350px" />
      <Skeleton duration={0.8} width="200px" height="350px" />
      <Skeleton duration={0.8} width="200px" height="350px" />
      <Skeleton duration={0.8} width="200px" height="350px" />
      <Skeleton duration={0.8} width="200px" height="350px" />
      <Skeleton duration={0.8} width="200px" height="350px" />
    </S.Content>
    <br />
    <Flex spaceBetween={4} justifyContent="center" paddingBottom={16}>
      <Skeleton duration={0.8} width="19px" height="24px" />
      <Skeleton duration={0.8} width="19px" height="24px" />
      <Skeleton duration={0.8} width="19px" height="24px" />
    </Flex>
  </>
);
