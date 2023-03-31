import React from 'react'

function Head() {
  return (
    <div>
       <div class="container-fluid hero-header  py-5 " style={{backgroundColor:"lightgray"}}>
        <div class="container py-5" style={{width:'100%',marginLeft:'100px'}}>
            <div class="row  align-items-center justify-content-center" style={{}}>
                <div class="col-md-6" style={{width:"400px",backgroundColor:"",}}>
                    <h4 class="display-4 mb-3 animated slideInDown" style={{fontSize:"20px",fontWeight:600}}>We Have Many Year Experience In Consultant Business</h4>
                    <p class="animated slideInDown ">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.</p>
                    <a href="/" class="btn btn-primary py-2 px-4 animated slideInDown mt-4">Start Now</a>
                </div>
                <div class="col-lg-6 animated fadeIn">
                    <img class="img-fluid animated pulse infinite" style={{animationDuration:"3s",width:"500px",}} src="https://media.istockphoto.com/id/1365112392/photo/indian-male-white-collar-worker-in-wheelchair-discussion-in-office-lounge-with-his-colleague.jpg?b=1&s=170667a&w=0&k=20&c=BdgGUHlOiJcXFMZL-DwYLE2Qq3xfw-hpyyD_c7wsrow=" alt="/"/>
                </div>
            </div>
        </div>
    </div>
  
    </div>
  )
}

export default Head
