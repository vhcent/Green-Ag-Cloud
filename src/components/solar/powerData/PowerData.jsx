import React from 'react';
import "./PowerData.css"

function PowerData() {
    return (
        <div className="power-data-container">
            <div className="power-item">
                <div className="power-title">
                    This Month's Power Production
                </div>
                <section className="power-value">
                    120.4 KW
                </section>
            </div>
            <div className="power-item">
                <div className="power-title">
                    Todays's Power Production
                </div>
                <section className="power-value">
                    5.4 KW
                </section>
            </div>
            <div className="power-item">
                <div className="power-title">
                    Average Power Production Rate
                </div>
                <section className="power-value">
                    60.4%
                </section>
            </div>
            <div className="power-item">
                <div className="power-title">
                    Average Weekly Power Production
                </div>
                <section className="power-value">
                    20.4 KW
                </section>
            </div>
        </div>
    )
}

export default PowerData;