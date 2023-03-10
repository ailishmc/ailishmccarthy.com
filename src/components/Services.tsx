import { StyledH2, StyledP, StyledH3, hoverUnderline } from "../styles"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import servicesData from "../data/services.yaml"

const servicesSection = css`
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  margin: 15% 0;
`

const servicesContainer = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & p {
    /* clip-path: inset(0% 0% 100% 0%);
    transition: clip-path 1s ease-in-out; */
  }
`

const serviceCss = css`
  width: 40%;
  @media (max-width: 700px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  margin: 5%;
  list-style: none;
  &:hover > p {
    clip-path: inset(0% 0% 0% 0%);
    cursor: pointer;
  }
`

const IconContainer = styled.div`
  display: flex;

  /* deconstructed pancake */
  flex-wrap: wrap;
  justify-content: center;
`

interface ServiceProps {
  title: string
  text: string
  link?: string
  icon?: any
}

const Services = () => {
  const { title, services } = servicesData;
  console.log(Object.values(services))
  
  const Service = (props: ServiceProps) => {
    const { title, text } = props;

    return (
      <li css={serviceCss}>
        <StyledH3 css={hoverUnderline}>{title}</StyledH3>
        <StyledP>{text}</StyledP>
      </li>
    )
  }

  return (
    <div>
      <div id="services" css={servicesSection}>
        <div>
          <StyledH2 id={title}>{title}</StyledH2>
        </div>
        <div css={servicesContainer}>
          {Object.values(services)?.map((service, index)  => (
                <Service title={service.title} text={service.text} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Services
