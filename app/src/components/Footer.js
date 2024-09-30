export default function Footer() {
    return (
        <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
            
            <footer >
                
            <div className="row justify-content-center mb-0 pt-5 pb-0 row-2 px-3">
                <div className="container">
                    <div className="col-12">
                        <div className="row row-2">
                            {/* <div className="col-sm-3 text-md-center"><h5><span> <i className="fa fa-firefox text-light" aria-hidden="true"></i></span><b>  МультиАтлон</b></h5></div> */}
                            <a href="/multi-athlon" className="col-sm-3 my-sm-0 mt-5"><h5 className="footer--link"><span> <i className="fa fa-firefox text-light" aria-hidden="true"></i></span ><b className="logo-desc">МультиАтлон</b></h5></a>
                            <div className="col-sm-3  my-sm-0 mt-5"><ul className="list-unstyled"><li className="mt-0"><a href="#" className="footer--link">Платформа</a></li><li><a href="#" className="footer--link">Помощь</a></li><li><a href="#"className="footer--link">Безопасность</a></li></ul></div>
                            <div className="col-sm-3  my-sm-0 mt-5"><ul className="list-unstyled"><li className="mt-0"><a href="#" className="footer--link">Участники</a></li><li><a href="#" className="footer--link">Соревнования</a></li><li><a href="#" className="footer--link">Лучшие результаты</a></li></ul></div>
                            <div className="col-sm-3  my-sm-0 mt-5"><ul className="list-unstyled"><li className="mt-0"><a href="#" className="footer--link">Компания</a></li><li><a href="#" className="footer--link">О нас</a></li><li><a href="#" className="footer--link">Карьера</a></li></ul></div>
                        </div>  
                    </div>
                </div>
                
            </div>
            <div className="row justify-content-center mt-0 pt-0 row-1 mb-0  px-sm-3 px-2">
                <div className="container">
                <div className="col-12">
                        <div className="row my-4 row-1 no-gutters">
                            {/* <div className="col-sm-3 col-auto text-center"><small>&#9400; Web31Kursk</small></div><div className="col-md-3 col-auto "></div><div className="col-md-3 col-auto"></div> */}
                            <div className="col-sm-3 col-auto text-left"><a href="#" className="footer--link"><small>&#9400; Web31Kursk</small></a></div><div className="col-md-3 col-auto "></div><div className="col-md-3 col-auto"></div>
                            <div className="col  my-auto text-md-left  text-right "><a href="#" className="footer--link"><small> multiatlon@yandex.ru <span><img src="https://i.imgur.com/TtB6MDc.png" className="img-fluid "  width="25"/></span> <span><img src="https://i.imgur.com/N90KDYM.png" className="img-fluid "  width="25"/></span></small></a>   </div> 
                        </div>
                    </div>
                </div>
                    
                </div>
            </footer>
        </div>
    )
}
