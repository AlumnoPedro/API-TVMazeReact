import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../style.css';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

      <section id="about-section" className="pt-5 pb-5 mt-5">
        <div className="container wrapabout">
          <div className="row">
            <div className="col-lg-6 align-items-center justify-content-left d-flex mb-5 mb-lg-0 bg-dark">
              <div className="blockabout">
                <div className="blockabout-inner text-center text-sm-start">
                  <div className="title-big pb-3 mb-3">
                    <h3>API TV MAZE</h3>
                  </div>
                  <p className="description-p text-muted pe-0 pe-lg-0">
                    Hemos realizado una interfaz para mostrar los datos de esta API,
                    la cuál va sobre series, episodios de las mismas series y los actores
                    que participan en las mismas.
                  </p>
                  <p className="description-p text-muted pe-0 pe-lg-0">Este trabajo ha sido realizado por Pedro Díaz y Raúl García</p>
                  <div className="sosmed-horizontal pt-3 pb-3">
                    <a href="https://es-es.facebook.com/">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="https://www.instagram.com/">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="https://github.com/">
                      <i className="fa fa-github" />
                    </a>
                  </div>
                  <a href="/shows" className="btn reybtn mt-3">Ver más</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <figure className="potoaboutwrap">
                <img className="imagenMedidas" src="src/img/series.jpg" alt="potoabout" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
