import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function Results() {
    return (
        <div className="row my-5 justify-content-center">
                <div className="col text-center">
                    <div className="card border-0">
                        <div className="card-body">
                            <div className="card-title">
                                <h3 className="mb-4"><Link to="/hero" className='footer--res' role="button" >Хочешь взглянуть на результаты своей команды?</Link>
                                {/* <a href="/" className="footer--res">Хочешь взглянуть на результаты своей команды?</a> */}
                                </h3>
                            </div> 
                            <div className="row justify-content-center">
                                <div className="col-md-4 col">
                                    <p className="small color-text">
                                        Мы покажем вам, как ваша команда может более эффективно соревноваться с  другими командами.
                                    </p>
                                    <button type="button" className="btn btn-primary border-0 my-4 btn--res">
                                        <b>Посмотреть результаты</b>
                                    </button>
                                    <br />
                                    <img src="https://i.imgur.com/pC6AgYC.jpg" className="img-fluid" width="450"/>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </div>
        </div>
    )
}