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
    url("https://images.squarespace-cdn.com/content/v1/65035171c71a1e393c55fa3e/15a0b5b6-9880-4fb9-9529-d889094ee5f8/7xSy7SsyBzGmi8LRW4HB3?format=2500w"),
    url("https://images.squarespace-cdn.com/content/v1/65035171c71a1e393c55fa3e/8731c8ae-fb7b-4e5b-acae-153533ef0023/h23mqTouecn4gaGqtouu-?format=2500w"),
    url("https://assets-global.website-files.com/6215507c11caaeaf5dad0d6e/6217eba789b97066f303fb85_blue_blob.png");

    background-blend-mode: soft-light;
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
