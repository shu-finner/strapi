import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ArticlesGrid from "../components/articles-grid"
import Headings from "../components/headings"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const { allStrapiArticle, strapiGlobal } = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        nodes {
          ...ArticleCard
        }
      }
      strapiGlobal {
        siteName
        siteDescription
      }
    }
  `)

  return (
    <Layout>
      <Seo seo={{ metaTitle: "Home" }} />
      <Headings
        title={strapiGlobal.siteName}
        description={strapiGlobal.siteDescription}
      />
      <main>
        <ArticlesGrid articles={allStrapiArticle.nodes} />
      </main>
    </Layout>
  )
}

export default IndexPage