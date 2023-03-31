import React from 'react'
import '../App.css'
import AllService from './AllService'
function Services() {
  return (
    <div>
         <section class="container pt-3 mb-3">
    <h2 class="h3 block-title text-center">Our Services</h2>
    <div class="row pt-5 mt-30">
        <div class="col-lg-4 col-sm-6 mb-30 pb-5">
            <a class="card" href="/">
                <div class="box-shadow bg-white rounded-circle mx-auto text-center" style={{width: "90px; height: 90px; margin-top: -45px;"}}><i class="fa fa-user fa-3x head-icon"></i></div>
                <div class="card-body text-center">
                    <h3 class="card-title pt-1">Financial Consulting</h3>
                    <p class="card-text text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p><span class="text-sm text-uppercase font-weight-bold">Learn More&nbsp;<i class="fe-icon-arrow-right"></i></span>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-sm-6 mb-30 pb-5" >
            <a class="card" href="/" style={{border:"2px solid cyan"}}>
                <div class="box-shadow bg-white rounded-circle mx-auto text-center" style={{width: "90px; height: 90px; margin-top: -45px;"}}><i class="fa fa-user-circle-o fa-3x head-icon"></i></div>
                <div class="card-body text-center">
                    <h3 class="card-title pt-1">Content Marketing</h3>
                    <p class="card-text text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p><span class="text-sm text-uppercase font-weight-bold">Learn More&nbsp;<i class="fe-icon-arrow-right"></i></span>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-sm-6 mb-30 pb-5">
            <a class="card" href="/">
                <div class="box-shadow bg-white rounded-circle mx-auto text-center" style={{width: "90px; height: 90px; margin-top: -45px;"}}><i class="fa fa-address-book fa-3x head-icon"></i></div>
                <div class="card-body text-center">
                    <h3 class="card-title pt-1">Finance Advices</h3>
                    <p class="card-text text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p><span class="text-sm text-uppercase font-weight-bold">Learn More&nbsp;<i class="fe-icon-arrow-right"></i></span>
                </div>
            </a>
        </div>
      
       
     
    </div>
    <AllService/>
</section>
    </div>
  )
}

export default Services
