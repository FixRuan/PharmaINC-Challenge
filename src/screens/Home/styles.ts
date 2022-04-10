import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
   width: 100%;
   align-items: center;
   justify-content: center;
   margin-top: 20px;
`;

export const Title = styled.Text`
   font-family: ${({ theme }) => theme.fonts.medium};
   font-size: ${RFValue(24)}px;
   color: ${({ theme }) => theme.colors.primary};
`;

export const Detail = styled.Text`
   color: ${({ theme }) => theme.colors.logoDetail};
`;

export const InputWrapper = styled.View`
   width: 100%;
   padding: 0px 10px;
   margin-top: 30px;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`;

export const FilterIcon = styled(Feather)`
   font-size: 24px;
   color: ${({ theme }) => theme.colors.secondary};
   margin-right: 20px;
`;