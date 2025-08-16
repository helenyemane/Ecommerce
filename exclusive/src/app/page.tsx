"use client";

import MusicBanner from './HomePage/Music';
import Header from './shared-components/Header/index';
import SidebarVoucher from './shared-components/Sidebar';
import Timer from './HomePage/Timer';
import SubTitle from './HomePage/Sub-title';
import Title from './HomePage/Title';
import ProductCard from './HomePage/Products';
import Category from './HomePage/Browsing';
import Arrivals from "./HomePage/NewArrivals";
import SellingProducts from './HomePage/Selling';
import ExploreProd from './HomePage/Explore-prod';
import Service from "./HomePage/Services";
import Footer from './shared-components/Footer';

export default function Home() {
    return (
        <div>
            <Header />
            <SidebarVoucher />
            <div>
                <SubTitle label="Today's" />
                <div className=' flex items-center w-3/4 mx-auto '>
                    <Title title="Flash Sales" />
                    <Timer date="2025-12-31T23:59:59" />
                </div>
            </div>
            <ProductCard />
            <div>
                <SubTitle label="Categories" />
                <div className=' flex items-center mb-10'>
                    <Title title="Browse By Category" />
                </div>
            </div>
            <Category />
            <SellingProducts />
            <MusicBanner />
            <ExploreProd />
            <div>
                <SubTitle label="Featured" />
                <div className=' flex items-center'>
                    <Title title="New Arrival" />
                </div>
            </div>
            <Arrivals />
            <Service />
            <Footer />
        </div>
    )
}