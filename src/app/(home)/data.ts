import { StaticImageData } from 'next/image'
import demo1 from '@/assets/images/demo/1.png'
import demo2 from '@/assets/images/demo/2.png'
import demo3 from '@/assets/images/demo/3.png'
import demo4 from '@/assets/images/demo/4.png'
import demo5 from '@/assets/images/demo/5.png'
import demo6 from '@/assets/images/demo/6.png'

type HomePagesType = {
  name: string
  image: StaticImageData
  path: string
}

export const homePagesData: HomePagesType[] = [
  {
    name: 'Product',
    image: demo1,
    path: '/product',
  },
  {
    name: 'Startup',
    image: demo2,
    path: '/startup',
  },
  {
    name: 'Software',
    image: demo3,
    path: '/software',
  },
  {
    name: 'Business',
    image: demo4,
    path: '/business',
  },
  {
    name: 'App',
    image: demo5,
    path: '/pageApp',
  },
  {
    name: 'Agency',
    image: demo6,
    path: '/agency',
  },
]
