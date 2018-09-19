import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from 'components/Header/header'
// import Footer from 'components/footer'
import PhotoBadge from 'components/photo-badge'

import 'bootstrap/dist/css/bootstrap.css';
import 'src/assets/css/index.css'
import 'src/assets/css/theme.css'
import 'src/assets/css/app.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            name
            title
            description
            keywords
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          htmlAttributes={{ 'lang': 'en', "amp": '' }}
          title={data.site.siteMetadata.name + ' - ' + data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
          bodyAttributes={{
            class: 'theme-dark io-zinnia',
            'data-spy': 'scroll',
            'data-target': '#mainnav',
            'data-offset': 80
          }}
          link={[
            { rel: 'stylesheet',
              href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
              integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU',
              crossorigin: 'anonymous'
            }
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <PhotoBadge />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
