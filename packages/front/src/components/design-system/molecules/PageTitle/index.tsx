import { Text, textAlign } from 'components/design-system/atoms/Text';



interface IProps {
  children: React.ReactNode;
  textAlign?: textAlign;
}

export function PageTitle({children, textAlign}: IProps) {
  return (
    <Text style="page-title" textAlign={textAlign}>{children}</Text>
  )
}