import React from "react";
import { CategoriesList } from "../components/categories";
import Layout from "../components/layout";
import Seo from "../components/seo";

const CategoryPage = () => {
    return (
      <Layout pageTitle="Home Page">
        <br/>
        <CategoriesList/>
      </Layout>
    )
  }

export const Head = () => <Seo title="Categories Page" />


export default CategoryPage;