import Container from "../components/container"
import Head from "next/head"
import Image from "next/image"
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
            {/* <h1>ABOUT ME</h1>
            <Image src="/assets/about/pete.png" alt="Pete" /> */}
            <h1 className="text-center">Coming Soon</h1>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default About