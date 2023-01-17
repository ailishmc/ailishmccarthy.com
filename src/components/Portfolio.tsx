import React from 'react'
import { StyledH2, StyledH3 } from '../styles'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const PortfolioQuadrant = styled.div`
    display: flex;
    flex-flow: column nowrap;
`
const outerDiv = css`
    position: relative;
    width: 100%;
    height: 280px;
    overflow: hidden;
    border: none;
    background-color: inherit;

    &:hover {
        img {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            cursor: pointer;
        }
    }
`

const imgDiv = css`
  width: 100%;
  opacity: 75%;

  height: fill-available;
  object-fit: cover;
  object-position: top;

  clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
  transition: clip-path 1s ease-in-out;
`

const textContainer = css`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;

    display: grid;
    place-items: center;
`

const PortfolioItem = props => {
    const { title, description, url, coverUrl } = props

    return (
        <a href={url ? url : ''} css={outerDiv}>
            {!!coverUrl &&  <img alt={'cover image for portfolio item'} src={coverUrl} css={imgDiv}></img> }
            <div css={textContainer}>
                <div>
                    <StyledH3
                        style={{
                            paddingBottom: '10px',
                            mixBlendMode: 'difference',
                        }}
                    >
                        {title}
                    </StyledH3>
                </div>
            </div>
        </a>
    )
}

const containerCss = css`
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
`

interface PortfolioProps {
    title: string
}

const Portfolio = (props: PortfolioProps) => {
    const { portfolio } = useSiteMetadata()
    const items = []

    for (const item of portfolio) {
        const { title, url, coverUrl } = item
        items.push(
            <PortfolioItem title={title} url={url} coverUrl={coverUrl} />
        )
    }

    return (
        <div id="portfolio" css={containerCss}>
            <StyledH2 id={props.title}>{props.title}</StyledH2>
            <PortfolioQuadrant>{items}</PortfolioQuadrant>
        </div>
    )
}

export default Portfolio
