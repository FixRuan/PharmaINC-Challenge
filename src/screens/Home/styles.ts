import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
   flex: 1;
   background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
   width: 100%;
   align-items: center;
   justify-content: center;
   margin-top: 20px;
   margin-bottom: 20px;
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

export const CardWrapper = styled.View`
   padding: 10px 18px;
   margin-top: 10px;
   padding-bottom: 64px;
`;

export const ModalContainer = styled.View`
   background-color: ${({ theme }) => theme.colors.white};
   width: 100%;
   height: 250px;
   padding: 10px;
`;

export const CloseModalIcon = styled(Feather)`
   font-size: 30px;
   color: ${({ theme }) => theme.colors.secondary};
   margin-right: 10px;
   margin-bottom: 10px;
   align-self: flex-end;
`;