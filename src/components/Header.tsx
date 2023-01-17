import styled from '@emotion/styled'
import React from 'react'
import { headerHeight } from '../styles'
import NavMenu from './NavMenu'
import { SerializedStyles, css } from '@emotion/react'

const HeaderStyled = styled.header`
    position: fixed;
    height: 10vh;
    width: 100%;
    top: 0px;
    margin: auto;
    z-index: 50;
    @media (min-width: 680px) {
        padding: 0 5%;
    }
    padding: 0 10%;
    height: fit-content;

    backdrop-filter: blur(5px);
    background: linear-gradient(#f7f7f7, #ffffff70);
    padding-bottom: 5px;
}
`

const TitleStyled = styled.h1`
    font-family: 'HK Grotesk';
    display: inline-block;
    width: fit-content;
    font-size: 1rem;
    letter-spacing: 0.2rem;
    word-wrap: break-word;

    color: rgba(17, 17, 17, 0.76);

`

const relativeContainer = css`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    padding: 30px 0;
    height: ${headerHeight}px;
`

interface HeaderProps {
    siteTitle: string
    padding: SerializedStyles
    navs?: []
}

const Header = ({ siteTitle, navs }: HeaderProps) => (
    <HeaderStyled>
        <div css={relativeContainer}>
            <TitleStyled>
                {/* todo make accessible  */}
                <div
                    onClick={() => {
                        window?.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                >
                    {siteTitle}
                </div>
            </TitleStyled>
            {navs && <NavMenu navs={navs}></NavMenu>}
        </div>
    </HeaderStyled>
)

export default Header
