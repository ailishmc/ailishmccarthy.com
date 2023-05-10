import styled from '@emotion/styled'
import { css } from "@emotion/react";

export const headerHeight = 100

export const StyledH2 = styled.h2`
    padding-top: 50px;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    letter-spacing: 0.15rem;
    line-height: 36px;
    text-align: center;
    padding-bottom: 10px;
    text-transform: lowercase;

    color: #4f4f4f;
`

export const StyledH3 = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 25px;
  padding-bottom: 5px;
  margin-bottom: 20px;
  text-align: center;
  width: fit-content;

  color: #575757;
`

export const StyledP = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.5rem;
    padding-bottom: 1.5rem;
    letter-spacing: 0.02rem;
    text-align: inherit;

    color: #6a6a6a;
`
export const StyledP2 = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    /* or 122% */

    text-align: center;

    color: #828282;
`
export const VisuallyHidden = styled.div`
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    white-space: nowrap; /* added line */
`

export const StyledAnchor = styled.a`
  font-style: normal;
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: 0.09rem;
  text-indent: 0.09rem;
  text-decoration: none;

  color: rgb(128, 128, 128);

  &:hover {
    cursor: pointer;
    color: rgba(17, 17, 17, 0.76);
  }
`

export const hoverUnderline = css`
  display: inline-block;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      90deg,
      rgba(252, 100, 80, 1) 0%,
      rgba(255, 143, 44, 1) 49%,
      rgba(255, 192, 0, 1) 100%
    );
    transform-origin: bottom left;
    transition: transform 0.5s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

export const accent = css`
  animation: color-change alternate-reverse 5s infinite;

  @keyframes color-change {
    0% {
      color: rgba(255, 143, 44, 1);
    }
    50% {
      color: rgba(255, 143, 44, 1);
    }
    100% {
      color: rgba(255, 192, 0, 1);
    }
  }

  &:hover {
    animation: color-change alternate-reverse 1s infinite;
  }
` 