// Header Styles:

// ___________________________________________________________________

import styled from 'styled-components'

// Theme
import theme from '../../gatsby-plugin-theme-ui'

// Elements
import { Box, Flex } from '../ui'

// ___________________________________________________________________

export const Header = styled(Box)`
  /* border-bottom: ${theme.border}; */
  width: 100%;

  a {
    color: ${theme.colors.black};
  }

  .header-inner {
    display: flex;
    justify-content: space-between;

    margin: 0 auto;
    /* max-width: ${theme.maxWidth}; */
    width: 100%;
  }

  .logo {
    text-decoration: none;
  }
`

export const Menu = styled(Flex)`
  align-items: flex-start;
  display: none;

  @media ${theme.mq.tablet} {
    display: flex;
  }
`

export const Logo = styled(Flex)`
  display: flex;
  flex-direction: column;

  .symbol {
    svg {
      width: ${theme.space[5]};

      @media ${theme.mq.tablet} {
        width: calc(${theme.space[5]} / 1.05);
      }
    }
  }

  .wordmark {
    margin-top: ${theme.space[4]};
    font-size: ${theme.fontSizes[1]};
    font-weight: 500;
    line-height: 1.25;
    text-decoration: none;

    @media ${theme.mq.tablet} {
      
    /* font-size: ${theme.fontSizes[2]}; */
    }
  }
`

export const Utilities = styled(Flex)``

export const Toggle = styled(Box)`
  display: initial;
  align-items: flex-start;
  box-sizing: content-box;

  color: ${theme.colors.text};
  font-size: calc(${theme.fontSizes[2]});
  font-weight: 400;
  cursor: pointer;

  @media ${theme.mq.tablet} {
    display: none;
  }

  span {
    svg {
      width: ${theme.space[5]};
    }
  }
`
