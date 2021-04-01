import React from 'react';
import {Button} from 'components/molecules/Button';
import Facebook from 'components/icons/Facebook';

interface IProps {
  children: React.ReactNode;
}

export const FacebookButton = ({children}: IProps) => (
  <Button variant="facebook" size="small">
    <Facebook color="#F3F3F3"/>
    <div>{children}</div>
  </Button>
)