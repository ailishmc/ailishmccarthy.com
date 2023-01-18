import React from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { css } from '@emotion/react'

import Header from './header'
import './layout.css'
import { headerHeight } from '../styles'

export const pagePaddingValue = 10

const pagePadding = css`
    padding-left: ${pagePaddingValue}%;
    padding-right: ${pagePaddingValue}%;
`
const pageCss = css`
    margin-top: ${headerHeight}px;
    ${pagePadding}
`

const Home = ({ children }) => {
    const { author, navs } = useSiteMetadata()

    return (
        <>
            <Header padding={pagePadding} siteTitle={author} navs={navs} />
            <div css={pageCss}>
                <main>{children}</main>
            </div>
        </>
    )
}

export default Home
