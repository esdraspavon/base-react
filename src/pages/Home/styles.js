import styled from "styled-components";
import media from "../../styles/media";
import ButtonComponent from '../../components/Button'

export const Button = styled(ButtonComponent)`
  background:red;
  ${media.medium`
    background:blue;
   `}
`;