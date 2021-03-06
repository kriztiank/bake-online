import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout/layout'
import Head from "../components/head"

const NotFound = () => {
    return (
        <Layout>
            <Head title="404"/>
            <header className='general__header'></header>
            <h1>Page not found</h1>
            <p><Link to="/">Head home</Link></p>
        </Layout>
    )
}

export default NotFound