import React, { useEffect, RefObject, useRef } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Twitter, Linkedin } from 'react-feather'
import { FaWhatsapp } from 'react-icons/fa'
import { StyledP, VisuallyHidden, StyledAnchor } from '../styles'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const containerCss = css`
    height: 90vh;
    visibility: hidden;
    display: flex;
    justify-content: space-between;
    position: relative;
`

const blurbCss = css`
    max-width: 500px;
    position: relative;

    h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 1.75em;
        letter-spacing: 0.05em;

        color: #000000;
    }
`

const SocialContainer = styled.div`
    float: right;
    display: flex;

    a {
        margin-left: 30px;
    }
`

const br = css`
    margin-top: 10px;
    display: block;
    content: '';
`

const SocialLink = styled.a`
    opacity: 0;
`

const animate = {
    opacity: 1,
    rotate: [-15, 0, 15, 0, -15, 0, 15, 0, -15, 0, 15, 0, -15, 0, 15, 0],
    transition: { delay: 1.2, duration: 2 },
}

const hideTextCss = css`
    margin-bottom: 20px;
    overflow: hidden;
`

const parCss = css`
    text-align: left;
    opacity: 0;
    padding-bottom: 20px;
`

const iconSize = css`
    font-size: 24px;
`

interface HeroProps {
    heading: string
    emoji?: string
    pars: []
    socials: string[]
}

const Hero = (props: HeroProps) => {
    const { heading, emoji, pars, socials } = props

    const containerRef: RefObject<HTMLDivElement> = React.createRef()
    const h2Ref: RefObject<HTMLDivElement> = React.createRef()
    const parRef: RefObject<HTMLDivElement> = React.createRef()

    const socialOne: RefObject<HTMLAnchorElement> = React.createRef()
    const socialTwo: RefObject<HTMLAnchorElement> = React.createRef()
    const socialThree: RefObject<HTMLAnchorElement> = React.createRef()

    const isDone = useRef(false)

    var tl = gsap.timeline()

    useEffect(() => {
        gsap.to(containerRef.current, 0, { css: { visibility: 'visible' } })

        if (!isDone.current) {
            tl.from(h2Ref.current, {
                duration: 1,
                y: 60,
                ease: 'power3.out',
                delay: 0.8,
                stagger: 5,
            })
                .to(parRef.current, {
                    duration: 1.5,
                    delay: 0,
                    opacity: 1,
                    ease: 'power3.in',
                })
                .to(socialOne.current, {
                    duration: 1,
                    opacity: 1,
                    ease: 'power3.in',
                })
                .to(socialTwo.current, {
                    delay: -0.5,
                    duration: 1,
                    opacity: 1,
                    ease: 'power3.in',
                })
                .to(socialThree.current, {
                    delay: -0.5,
                    duration: 1,
                    opacity: 1,
                    ease: 'power3.in',
                })

            isDone.current = true
        }
    })

    return (
        <div css={containerCss} ref={containerRef}>
            <div
                css={css`
                    right: 0px;
                    top: 20%;
                    position: absolute;
                `}
            >
                <div css={blurbCss}>
                    <div css={hideTextCss}>
                        <h2 ref={h2Ref}>
                            {`${heading} `}
                            {emoji && (
                                <motion.div
                                    style={{ display: 'inline-block' }}
                                    initial={{ opacity: 0 }}
                                    animate={animate}
                                >
                                    {emoji}
                                </motion.div>
                            )}
                        </h2>
                    </div>
                    <div ref={parRef} css={parCss}>
                        {pars.map(par => (
                            <StyledP>
                                {par.url ? (
                                    <StyledAnchor
                                        target="_blank"
                                        href={par.url}
                                    >
                                        {par.text}
                                    </StyledAnchor>
                                ) : (
                                    par.text
                                )}
                                <br css={br} />
                            </StyledP>
                        ))}
                    </div>
                </div>
                <SocialContainer>
                    <SocialLink
                        ref={socialOne}
                        href={socials[0]}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <VisuallyHidden>WhatsApp</VisuallyHidden>
                        <FaWhatsapp css={iconSize}color="#FC6450" aria-hidden={'true'} />
                    </SocialLink>
                    <SocialLink
                        ref={socialTwo}
                        href={socials[1]}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <VisuallyHidden>Twitter</VisuallyHidden>
                        <Twitter color="#FF8F2C" aria-hidden={'true'} />
                    </SocialLink>
                    <SocialLink
                        ref={socialThree}
                        href={socials[2]}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <VisuallyHidden>LinkedIn</VisuallyHidden>
                        <Linkedin color="#FFC000" aria-hidden={'true'} />
                    </SocialLink>
                </SocialContainer>
            </div>
        </div>
    )
}

export default Hero
