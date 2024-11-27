import React from 'react'
import { homePagesData } from '../data'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'

const HomePages = () => {
  return (
    <section className="section" id="demo">
      <Container>
        <Row className="justify-content-center mb-4">
          <Col lg={7}>
            <div className="title text-center mb-3">
              <h2 className="text-dark lh-base">Creative, Modern And Powerful HomePages</h2>
              <p className="text-muted">Discover 6 Home Page Options, Each Crafted with a Unique Design Aesthetic</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {homePagesData.map((item, idx) => {
            return (
              <Col lg={4} md={6} key={idx}>
                <div className="demo-box card">
                  <Link href={item.path} target="_blank">
                    <Image src={item.image} alt="demo-img" className="img-fluid mx-auto d-block" />
                    <div className="demo-overlay" />
                  </Link>
                </div>
                <div className="text-center">
                  <h4 className="demo-box-title">{item.name}</h4>
                </div>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}

export default HomePages
