import React from "react";
import { CategoriesList } from "../components/categories";
import Layout from "../components/layout";
import Seo from "../components/seo";

const CategoryPage = () => {
    return (
      <Layout pageTitle="Categories">
        <p>Generative modles are organized under 11 categories.</p>
        <br/>
        <CategoriesList/>
      </Layout>
    )
  }

export const Head = () => <Seo title="Categories Page" />


export default CategoryPage;