import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'

const Page3 =  () => (
    <Layout>
        <h1>Hello from Page 3!</h1>
        <Link to="/page-2">Go to page 2</Link>
    </Layout>
)

export default Page3;
