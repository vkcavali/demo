import React from 'react';

class Footer extends React.Component{

     render() {
         return (
            <footer id="page-footer" className="bg-body-light">
                <div className="content py-0">
                    <div className="row font-size-sm">
                        <div className="col-sm-6 order-sm-2 mb-1 mb-sm-0 text-center text-sm-right">
                            Crafted with
                            <i className="fa fa-heart text-danger"></i> by
                            <a className="font-w600" href="https://goo.gl/vNS3I" target="_blank">pixelcave</a>
                        </div>
                        <div className="col-sm-6 order-sm-1 text-center text-sm-left">
                            <a className="font-w600" href="https://goo.gl/mDBqx1" target="_blank">Dashmix 1.2</a> &copy;
                            <span data-toggle="year-copy">2018</span>
                        </div>
                    </div>
                </div>
            </footer>
         );
     }
 }
 
 export default Footer;