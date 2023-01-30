"use client";
import { Inter } from '@next/font/google'

import Header from './component/Header/page';
import Features from './component/Features/page';
import Pricing from './component/pricing/page';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Header/>
    <Pricing/>
    <Features/>
     
    
    </>
  )
}