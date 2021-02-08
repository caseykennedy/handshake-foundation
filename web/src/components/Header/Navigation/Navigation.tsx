// Navigation

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import Icon from '../../Icons'
import { Box } from '../../ui'

import theme from '../../../gatsby-plugin-theme-ui'
import * as S from './styles.scss'

// ___________________________________________________________________

const Navigation = () => {
  return (
    <S.Nav>
      {data.map((item, idx) => (
        <Link
          to={item.link}
          activeClassName="active"
          partiallyActive={true}
          key={idx}
        >
          {item.name}
        </Link>
      ))}
    </S.Nav>
  )
}

export default Navigation

// ___________________________________________________________________

const data = [
  {
    name: 'Blog',
    link: '/blog'
  },
  {
    name: 'Apply for a grant',
    link: '/apply'
  },
  {
    name: 'Donate',
    link: '/donate'
  }
]
