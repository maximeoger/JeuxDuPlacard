import React from 'react';
import {Button} from 'components/design-system/molecules/Button';
import Facebook from 'components/design-system/icons/Facebook';

interface IProps {
  children: React.ReactNode;
}

export const FacebookButton = ({children}: IProps) => (
  <Button variant="facebook" size="small">
    <Facebook color="#F3F3F3"/>
    <div>{children}</div>
  </Button>
)