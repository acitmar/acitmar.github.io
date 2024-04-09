import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

import { SocialIcon } from 'react-social-icons';

function FooterAcitmar() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <SocialIcon url="https://www.facebook.com/acitmarca"></SocialIcon>
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <SocialIcon url="https://www.instagram.com/acitmar_ser/"></SocialIcon>
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <SocialIcon url="https://twitter.com/acitmar_ser"></SocialIcon>
          </MDBBtn>
        </section>
        <br/><br/>
        <section className='mb-4'>  
          <h3>María Pernil</h3>  
          <p>
          Directora/Gerente de ACITMAR, C.A.<br/>
          Trainer Training en PNL (España).<br/>
          Master en Terapia (España).<br/>
          MSc Ciencias Gerenciales de RRHH (Venezuela).<br/>
          Master en PNL (España).<br/>
          Pedagoga Sistémica (México).<br/>
          Especialista Coaching con poder Neurológico (España).<br/>
          Coaching Ontológico y Profesional (Venezuela).<br/>
          Consteladora Familiar (Egresada de Bert Hellinger Sciencie en México).<br/>
          Conferencista Internacional.<br/>
          </p><br/>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>FACEBOOK</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='https://www.facebook.com/acitmarca' className='text-white'>
                    ACITMARCA
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>INSTAGRAM</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='https://www.instagram.com/acitmar_ser/' className='text-white'>
                    @acitmar_ser
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='4' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>TWITTER</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='https://twitter.com/acitmar_ser' className='text-white'>
                    @acitmar_ser
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:{' '}
        <a className='text-white' href='https://vaneycaroline.com/'>
          vaneycaroline.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default FooterAcitmar;
