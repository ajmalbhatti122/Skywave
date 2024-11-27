import React from 'react'
import Hero from './components/Hero'
import HomePages from './components/HomePages'
import { Col, Row } from 'react-bootstrap'
import { currentYear } from '@/context/constants'

const Home = () => {
  return (
    <>
      <Hero />
      <div className="position-relative">
        <div className="shape">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={1440}
            height={70}
            preserveAspectRatio="none"
            viewBox="0 0 1440 150"
            className="w-100 h-auto">
            <g mask='url("#SvgjsMask1022")' fill="none">
              <path d="M 0,58 C 144,73 432,131.8 720,133 C 1008,134.2 1296,77.8 1440,64L1440 250L0 250z" fill="rgba(255, 255, 255, 1)" />
            </g>
            <defs>
              <mask id="SvgjsMask1022">
                <rect width={1440} height={250} fill="#ffffff" />
              </mask>
            </defs>
          </svg>
        </div>
      </div>
      <HomePages />
      <footer className="footer bg-dark py-4">
        <div className="container-fluid">
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <p className="text-white mb-0">
                  {currentYear} © Skywave. Design by{' '}
                  <a href="#" className="fw-semibold text-white text-decoration-underline">
                    MarkeyThemes
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </footer>
    </>
  )
}

export default Home
