import  '../App.css';

function NavBar() {
  return (
    <>
    
    <nav class="navbar navbar-expand-lg  navbar-light sticky-top p-0 px-4 px-lg-5" id="mm">
        <a href="index.html" class="navbar-brand d-flex align-items-center" id="navbar-brand">
            <h2 class="m-0 text-primary">Bisnes</h2>
        </a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-4 py-lg-0">
                <a href="index.html" class="nav-item nav-link">Home</a>
                <a href="about.html" class="nav-item nav-link">About</a>
                <a href="service.html" class="nav-item nav-link">Project</a>
                <a href="roadmap.html" class="nav-item nav-link">Blog</a>
                <a href="contact.html" class="nav-item nav-link">service</a>

                <a href="contact.html" class="nav-item nav-link">Contact</a>
            </div>
          
        </div>
    </nav>

  </>
  );
}

export default NavBar;