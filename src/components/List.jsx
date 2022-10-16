import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import moment from "moment";

const List = ({id,title,note,start_time,end_time,start_date,end_date,is_completed,deleteTodo}) => {
 
 
 
  return (
    <Wrapper>
      
      <Card className="my-3">
        <Card.Body className="py-1 px-4">
          <Row className="align-items-center">
            <Col sm={10}>
              <h5>{title}</h5>
              <p className="text-secondary">
                {note}
              </p>
              <p className="text-secondary">
               
                Start Date: {start_date} at {(start_time)} - {end_date} at {end_time}
              </p>
            </Col>
            <Col sm={2}>
              <div className="text-center d-md-flex align-items-center ">
                <Form.Check type="checkbox" className="action-btn"  checked={is_completed && true}/>
                {!is_completed && <BiEditAlt size={20}   className="action-btn text-info" />}
                <BiTrash size={20} onClick={()=>deleteTodo(id)} className="action-btn text-danger" />
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .action-btn {
    margin: 5px;
    cursor: pointer;
  }
`;

export default List;
