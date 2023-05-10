import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { StyledAnchor, hoverUnderline, accent } from '../styles'

const ListContainer = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    list-style-type: none;

    li {
        margin-right: 3em;

        @media screen and (max-width: 600px) {
            margin-right: .5em;
        }

        &:last-child {
            margin-right: 0;
        }
    }
`

const navCss = css`
    width: fit-content;
`
interface NavMenuProps {
    navs: { title: string; url: string, accent: boolean }[]
}

const NavMenu = ({ navs }: NavMenuProps) => {
    const navItems: JSX.Element[] = []


    for (const nav of navs) {
        const isActualLink = (nav.url.charAt(0) !== '#');

        if (isActualLink) {
            const isAccented = nav.accent === true;

            const css = isAccented ? accent : hoverUnderline;
            navItems.push(
                <li>
                    <StyledAnchor css={css} href={nav.url}>
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
