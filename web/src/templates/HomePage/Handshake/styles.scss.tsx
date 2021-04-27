// Handshake Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import theme from '../../../gatsby-plugin-theme-ui'
import { Box } from 'theme-ui'

// ___________________________________________________________________

export const Handshake = styled(Box)<{ isDark: boolean }>`
  border-top: ${theme.border};
  position: relative;

  .decorator__torus {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    overflow: visible;
    height: 0;
    max-width: 1680px;
    width: 100%;

    svg {
      @media ${theme.mq.tablet} {
      }

      @media ${theme.mq.desktop} {
      }
    }
  }

  .decorator__cube {
    svg {
      max-width: 60vw;

      @media ${theme.mq.tablet} {
        max-width: 40vw;
      }
    }
  }

  .built-on {
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    width: 100%;

    span {
      margin-left: ${theme.space[5]};

      svg {
        width: 80px;

        @media ${theme.mq.tablet} {
          width: 100px;
        }
      }
    }
  }
`