import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br />
          <div className="icono"><a href={url}><i class="fa-solid fa-arrow-right"></i></a></div>
          
        </div>
      </div>
    </Col>
  )
}
