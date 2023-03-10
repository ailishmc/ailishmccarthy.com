import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { StyledAnchor, hoverUnderline } from '../styles'

const ListContainer = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    list-style-type: none;

    li {
        margin-right: 20px;
        &:last-child {
            margin-right: 0;
        }
    }
`

const navCss = css`
    width: fit-content;
`
interface NavMenuProps {
    navs: { title: string; url: string }[]
}

const NavMenu = ({ navs }: NavMenuProps) => {
    const navItems: JSX.Element[] = []

    for (const nav of navs) {
        if (!(nav.url.charAt(0) === '#')) {
            navItems.push(
                <li>
                    <StyledAnchor css={hoverUnderline} href={nav.url}>
                        {nav.title}
                    </StyledAnchor>
                </li>
            )
        } else {
            navItems.push(
                <li>
                    <StyledAnchor
                        css={hoverUnderline}
                        onClick={() => {
                            const top = document?.getElementById(nav.title)
                                ?.offsetTop
                            if (top) {
                                const x = top - 100
                                window?.scrollTo({ top: x , behavior: 'smooth' })
                            }
                        }}
                    >
                        {nav.title}
                    </StyledAnchor>
                </li>
            )
        }
    }

    return (
        <nav css={navCss}>
            <ListContainer>{navItems}</ListContainer>
        </nav>
    )
}

export default NavMenu
