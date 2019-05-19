import React from 'react';
import visa from './visa.png'
import sim from './chips.png'

export default class Card extends React.Component{
  render() {
    return (
    <div className="credit-card-wrap">
      <div className="mk-icon-world-map"></div>
      <div className="credit-card-inner">
        <header className="header">
          <div className="credit-logo">
            <div className="shape"><span className="txt">PB</span></div> <span className="text">Public Bank of Tunisia</span>
          </div>
        </header>
        <div className="mk-icon-sim"><img alt="sim" src={sim} width="55px" height="40px"/></div>
        <div className="credit-font credit-card-number" data-text="4716">4716 6109 5211 3010</div>
        <footer className="footer">
          <div className="clearfix">
            <div className="pull-left">
              <div className="credit-card-date"><span className="title">Expires End</span><span className="credit-font">01/018</span></div>
              <div className="credit-font credit-author">MOHAN KHADKA</div>
            </div>
            <div className="pull-right"><img src={visa} alt="visa" className="mk-icon-visa"/></div>
          </div>
        </footer>
      </div>
    </div>
    );
  }
}

