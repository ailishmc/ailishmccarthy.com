import SEO from '../components/Seo'
import Home from '../components/Home'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { css } from '@emotion/react';

const IndexPage = () => {
    const {
        navs,
        title,
        lang,
        author,
        desc,
        socials,
    } = useSiteMetadata()
    const { heading, emoji, pars } = desc

    return (
            <Home>
                <SEO title={title} lang={lang} author={author} description={desc?.pars[0]}/>
                <Hero
                    heading={heading}
                    emoji={emoji}
                    pars={pars}
                    socials={socials}
                />
            </Home>
    )
}
export default IndexPage
