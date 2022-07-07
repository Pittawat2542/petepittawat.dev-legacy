import Container from "../components/container"
import Head from "next/head"
import Layout from "../components/layout"

const About = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>PETEPITTAWAT.DEV | ABOUT</title>
        </Head>
        <Container>
          <div className="flex">
            <h1>ABOUT ME</h1>
            <img src="/assets/about/pete.png" alt="Pete" />
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default About