import { Text } from 'design-system/atoms/Text';

interface IProps {
  children: React.ReactNode;
}

export function PageTitle({children}: IProps) {
  return (
    <Text style="page-title">{children}</Text>
  )
}