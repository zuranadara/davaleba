import React from "react";
import line from '../../../assets/common/line.svg';
import doctor from '../../../assets/common/doctor.svg';
import ellipse from '../../../assets/common/ellipse.svg'
import './index.css';

export const MainLayout = () => {
    return (
        <div className='main-layout'> 
            <div>
                <div className="left-text">
                    <div>Find & Search Your</div>
                    <div><span className="favorite">Favourite</span> Doctor</div>
                    <img src={line} className="line-img"/>

                    <div className="search-container">
                        <input className="search" type="search"/>
                        <span className="search-icon"></span>
                    </div>
                </div>
                <div className="left-second-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sem velit viverra amet faucibus.</p>
                </div>
            </div>
            <div className="doctor-img"><img src={doctor}/></div>
            <div className="ellipse-border"><img src={ellipse}/></div>
        </div>
    );
};
