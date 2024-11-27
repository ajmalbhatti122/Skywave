import Image from 'next/image'
import React from 'react'
import logoDark from '@/assets/images/logo-dark.png'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const Hero = () => {
  return (
    <section className="section overflow-hidden bg-light position-relative">
      <Container>
        <Row className="align-items-center justify-content-center text-center position-relative">
          <Col lg={11}>
            <Row className="justify-content-center align-items-center pb-4">
              <Col lg={9}>
                <div className="mb-4">
                  <Link className="navbar-brand" href="/">
                    <Image src={logoDark} alt="logo" height={32} />
                  </Link>
                </div>
                <h1 className="text-center lh-base text-dark fw-semibold">Multi-Use Landing Page Template</h1>
                <p className="text-muted fw-medium">
                  Unleash your creativity and bring your vision to life with Skywave. Our platform provides you with all the tools you need to create
                  a stunning and professional website effortlessly.
                </p>
                <Row className="align-items-center justify-content-center mt-4 text-start">
                  <Col xs={6} lg={3}>
                    <p className="fs-6 text-dark fw-medium">
                      <IconifyIcon icon="tabler:circle-check-filled" className="text-success fs-5 me-2 align-middle" />
                      Ready To Use
                    </p>
                  </Col>
                  <Col xs={6} lg={3}>
                    <p className="fs-6 text-dark fw-medium">
                      <IconifyIcon icon="tabler:circle-check-filled" className="text-success fs-5 me-2 align-middle" />
                      Easy To Set Up
                    </p>
                  </Col>
                  <Col xs={6} lg={3}>
                    <p className="fs-6 text-dark fw-medium">
                      <IconifyIcon icon="tabler:circle-check-filled" className="text-success fs-5 me-2 align-middle" />
                      Proficient Support
                    </p>
                  </Col>
                  <Col xs={6} lg={3}>
                    <p className="fs-6 text-dark fw-medium">
                      <IconifyIcon icon="tabler:circle-check-filled" className="text-success fs-5 me-2 align-middle" />
                      Free Update
                    </p>
                  </Col>
                </Row>
                <div className="d-flex justify-content-center gap-2 mt-4">
                  <Link href="#demo" className="btn btn-primary">
                    Start Creating
                  </Link>
                  <Link href="#demo" className="btn btn-dark">
                    View All Demo
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero
