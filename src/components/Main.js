import React from 'react'
import '../App.css'
function Main() {
  return (
    <>
    
    <div class="container-fluid hero-header bg-light py-5 " id='container'>
        <div class="container py-5">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6">
                   <p className='animated slideInDown mb-0'>Ki Name Dhake Bolbo Tomate</p>
                    <h1 class="display-4 mb-3 animated slideInDown" id='head'>We Are Consulting For YOUR Business Finances</h1>
                    <p class="animated slideInDown ">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.</p>
                    <a href="/" class="btn btn-primary py-2 px-4 animated slideInDown mt-4">Start Now</a>
                </div>
                <div class="col-lg-6 animated fadeIn">
                    <img class="img-fluid animated pulse infinite" style={{animationDuration:"3s"}} src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlJTIwd29ya2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="/"/>
                </div>
            </div>
        </div>
    </div>
  
  </> 
    
  )
}

export default Main
