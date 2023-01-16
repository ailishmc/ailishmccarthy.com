import { useStaticQuery, graphql } from 'gatsby'
export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query SiteMetaData {
                site {
                    siteMetadata {
                        title
                        author
                        desc {
                            heading
                            emoji
                            pars {
                                text
                                url
                            }
                        }
                        navs {
                            title
                            url
                        }
                        services {
                            title
                            blurb
                        }
                        portfolio {
                            title
                            url
                            coverUrl
                        }
                        socials
                    }
                }
            }
        `
    )
    return site.siteMetadata
}
