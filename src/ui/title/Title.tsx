import { FC, memo, ReactNode } from 'react';
import styled from './Title.module.css';

interface ITitleProps {
  children: ReactNode;
}

export const Title: FC<ITitleProps> = memo(({ children }) => {
  return <h1 className={styled.title}>{children}</h1>;
});
