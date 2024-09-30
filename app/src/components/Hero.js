import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function Hero() {
    return (
        <div className="container hero">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h1 className="text-center">
                    <Link to="/resultsPage" className='hero-link'>Результаты выступлений спортсменов</Link>
                    </h1>
                    {/* <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src="images/hero1.jpg"></iframe>
                    </div> */}
                </div>
            </div>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">Результат</th>
                    <th scope="col">Имя</th>
                    <th scope="col">Фамилия</th>
                    <th scope="col">Город</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Иван</td>
                    <td>Петров</td>
                    <td>Курск</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Сергей</td>
                    <td>Ветров</td>
                    <td>Москва</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Иван</td>
                    <td>Петров</td>
                    <td>Курск</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Иван</td>
                    <td>Петров</td>
                    <td>Курск</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>Сергей</td>
                    <td>Ветров</td>
                    <td>Москва</td>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td>Иван</td>
                    <td>Петров</td>
                    <td>Курск</td>
                </tr>
                <tr>
                    <th scope="row">7</th>
                    <td>Иван</td>
                    <td>Петров</td>
                    <td>Курск</td>
                </tr>
                <tr>
                    <th scope="row">8</th>
                    <td>Сергей</td>
                    <td>Ветров</td>
                    <td>Москва</td>
                </tr>
                <tr>
                    <th scope="row">9</th>
                    <td>Иван</td>
                    <td>Петров</td>
                    <td>Курск</td>
                </tr>
                </tbody>
            </table>

            
            
        </div>
        
    )
}