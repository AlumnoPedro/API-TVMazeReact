import React from 'react';
import '../footer.css';

function Footer() {
  return (
    <>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      <footer className="footer_area section_padding_130_0">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4">
              <div className="single-footer-widget section_padding_0_130">
                <div className="footer-logo mb-3" />
                <img src="src/img/tvm-header-logo.png" alt="logo" />
                <br />
                <br />
                <p>Página realizada a través de la api ApiTVMaze por Pedro Díaz y Raúl García</p>
                <div className="footer_social_area">
                  <a href="https://es-es.facebook.com/" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook">
                    <i className="fa fa-facebook" />
                  </a>
                  <a href="https://www.pinterest.es/" data-toggle="tooltip" data-placement="top" title="" data-original-title="Pinterest">
                    <i className="fa fa-pinterest" />
                  </a>
                  <a href="https://www.skype.com/es/" data-toggle="tooltip" data-placement="top" title="" data-original-title="Skype">
                    <i className="fa fa-skype" />
                  </a>
                  <a href="https://twitter.com/" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter">
                    <i className="fa fa-twitter" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg">
              <div className="single-footer-widget section_padding_0_130">
                <h5 className="widget-title">Sobre Nosotros</h5>
                <div className="footer_menu">
                  <ul>
                    <li><strong>Integrantes:</strong></li>
                    <br />
                    <li>Raúl García</li>
                    <br />
                    <li>Pedro Díaz</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg">
              <div className="single-footer-widget section_padding_0_130">
                <h5 className="widget-title">Soporte</h5>
                <div className="footer_menu">
                  <ul>
                    <li><a href="#">Ayuda</a></li>
                    <li><a href="#">Soporte</a></li>
                    <li><a href="#">Política de privacidad</a></li>
                    <li><a href="#">Términos &amp; Condiciones</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg">
              <div className="single-footer-widget section_padding_0_130">
                <h5 className="widget-title">Contacto</h5>
                <div className="footer_menu">
                  <ul>
                    <li><a href="#">IES Azarquiel</a></li>
                    <li><a href="https://www.google.com/intl/es/gmail/about/">Email</a></li>
                    <li><a href="#">Términos &amp; Condiciones</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
