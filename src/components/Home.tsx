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
    ${pagePadding}
    height: 100vh;
    background-image: url("https://assets-global.website-files.com/6215507c11caaeaf5dad0d6e/6217eba7cb776a6655648884_amaranth_blob.png"), 
    url("https://assets-global.website-files.com/6215507c11caaeaf5dad0d6e/6217eba789b97066f303fb85_blue_blob.png");
);
`

const Home = ({ children }) => {
    return (
        <>
            <div css={pageCss}>
                <main>{children}</main>
            </div>
        </>
    )
}

export default Home
