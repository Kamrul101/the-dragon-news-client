import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaInstagram} from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import './RightNav.css'


const RightNav = () => {

  return (
    <div>
      <Button variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub /> Login with GitHub
      </Button>
      <div>
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter/>Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
          
        </ListGroup>
      </div>
      <Qzone></Qzone>
      <div>
        {/* <img src={bg} alt="" /> */}
        <div className="text-center bg-image py-5 px-4 my-5 rounded">
            <h3 className="fs-1 fw-1">Create an Amazing Newspaper</h3>
            <h5 className="fs-6 pt-4 pb-5">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</h5>
            <Button variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
