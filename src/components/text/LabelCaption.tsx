import styled from 'styled-components'
import theme from "../../theme";
import {
  color, ColorProps,
  layout, LayoutProps,
  space, SpaceProps,
  typography, TypographyProps,
  compose
} from 'styled-system'

type Props = ColorProps & LayoutProps & SpaceProps & TypographyProps & {}

const ValidationMessage = styled.p<Props>`
  color: ${theme.colors.gray[2]};
  margin-top: ${theme.space[1]};
  ${compose(color, layout, space, typography)}
`;

export default ValidationMessage;

ValidationMessage.defaultProps = {
  fontSize: 0,
  lineHeight: 'regular'
};
