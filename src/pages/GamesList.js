import React from 'react';
import {
  CDBCard, CDBBtn, CDBCardBody, CDBContainer,
} from 'cdbreact';
import style from '../assets/components_styles/game_list.module.css';

const GamesList = () => (
  <section className={style.game_list}>
    <CDBContainer className={style.container}>
      <CDBCard style={{
        position: 'relative', width: '25rem', height: '33rem', backgroundImage: "url('img/rectangle.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
      }}
      >
        <CDBCardBody style={{
          backgroundColor: 'white', width: 'calc(100% - 50px)', textAlign: 'left', align: 'center', position: 'absolute', bottom: 0,
        }}
        >
          <h1 style={{ color: '#333333' }} className="font-weight-normal">Chukwudi Mezue</h1>
          <p style={{ color: '#333333', fontSize: '0.9rem' }} className="font-weight-lighter">Product Designer</p>
          <p style={{ color: '#333333' }} className="font-weight-light">Enugu, Nigeria</p>
          <CDBBtn color="dark" block>
            Send Message
          </CDBBtn>
        </CDBCardBody>
      </CDBCard>
      <CDBCard style={{
        position: 'relative', width: '25rem', height: '33rem', backgroundImage: "url('img/rectangle.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
      }}
      >
        <CDBCardBody style={{
          backgroundColor: 'white', width: 'calc(100% - 50px)', textAlign: 'left', align: 'center', position: 'absolute', bottom: 0,
        }}
        >
          <h1 style={{ color: '#333333' }} className="font-weight-normal">Chukwudi Mezue</h1>
          <p style={{ color: '#333333', fontSize: '0.9rem' }} className="font-weight-lighter">Product Designer</p>
          <p style={{ color: '#333333' }} className="font-weight-light">Enugu, Nigeria</p>
          <CDBBtn color="dark" block>
            Send Message
          </CDBBtn>
        </CDBCardBody>
      </CDBCard>
      <CDBCard style={{
        position: 'relative', width: '25rem', height: '33rem', backgroundImage: "url('img/rectangle.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
      }}
      >
        <CDBCardBody style={{
          backgroundColor: 'white', width: 'calc(100% - 50px)', textAlign: 'left', align: 'center', position: 'absolute', bottom: 0,
        }}
        >
          <h1 style={{ color: '#333333' }} className="font-weight-normal">Chukwudi Mezue</h1>
          <p style={{ color: '#333333', fontSize: '0.9rem' }} className="font-weight-lighter">Product Designer</p>
          <p style={{ color: '#333333' }} className="font-weight-light">Enugu, Nigeria</p>
          <CDBBtn color="dark" block>
            Send Message
          </CDBBtn>
        </CDBCardBody>
      </CDBCard>
      <CDBCard style={{
        position: 'relative', width: '25rem', height: '33rem', backgroundImage: "url('img/rectangle.png')", backgroundRepeat: 'no-repeat', backgroundPosition: 'center',
      }}
      >
        <CDBCardBody style={{
          backgroundColor: 'white', width: 'calc(100% - 50px)', textAlign: 'left', align: 'center', position: 'absolute', bottom: 0,
        }}
        >
          <h1 style={{ color: '#333333' }} className="font-weight-normal">Chukwudi Mezue</h1>
          <p style={{ color: '#333333', fontSize: '0.9rem' }} className="font-weight-lighter">Product Designer</p>
          <p style={{ color: '#333333' }} className="font-weight-light">Enugu, Nigeria</p>
          <CDBBtn color="dark" block>
            Send Message
          </CDBBtn>
        </CDBCardBody>
      </CDBCard>
    </CDBContainer>
  </section>
);

export default GamesList;
