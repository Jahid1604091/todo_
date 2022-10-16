import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import { TimePicker } from "@mui/x-date-pickers";
import moment from "moment";
import swal from 'sweetalert';
const AddModal = (props) => {
  const { addTodo } = props;
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [startDate, setStartDate] = useState(dayjs(new Date()));
  const [endDate, setEndDate] = useState(dayjs(new Date()));
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!title || !note || !startDate  || !endDate || !startTime || !endTime){
        return swal("Plz fil")
    }
    addTodo({
        title,
        note,
        start_date:moment(startDate).format("DD-MM-YYYY"),
        end_date:moment(startDate).format("DD-MM-YYYY"),
        start_time:moment(startTime).format("hh:mm"),
        end_time:moment(endTime).format("hh:mm"),
        
    })
    swal({
        title: "Success!",
        text: "Task Added!",
        icon: "success",
        button: "Done!",
      })
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter text-center">
          Add Todo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Form.Control as="text" className="border-0">
              <TextField
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                fullWidth
                placeholder="Write task title"
              />
            </Form.Control>
            <Form.Control as="text" className="border-0">
              <TextField
                placeholder="Write task note"
                name="note"
                onChange={(e) => setNote(e.target.value)}
                value={note}
                fullWidth
                multiline
                rows={4}
              />
            </Form.Control>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control as="date" className="border-0">
                  <DatePicker
                    type="date"
                    label="Start Date"
                    fullWidth
                    name="startDate"
                    value={startDate}
                    onChange={(v) => setStartDate(v)}
                    views={["year", "month", "day"]}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: "100%" }} />
                    )}
                  />
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control as="text" className="border-0">
                  <TimePicker
                    label="Start Time"
                    name="startTime"
                    value={startTime}
                    onChange={(v) => setStartTime(v)}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: "100%" }} />
                    )}
                  />
                </Form.Control>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control as="text" className="border-0">
                  <DatePicker
                    label="End Date"
                    views={["year", "month", "day"]}
                    name="endDate"
                    value={endDate}
                    onChange={(v) => setEndDate(v)}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: "100%" }} />
                    )}
                  />
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control as="text" className="border-0">
                  <TimePicker
                    label="End Time"
                    name="endTime"
                    value={endTime}
                    onChange={(v) => setEndTime(v)}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ width: "100%" }} />
                    )}
                  />
                </Form.Control>
              </Form.Group>
            </Row>

            <div className="text-center">
              <input
                variant="primary"
                value="ADD"
                className="btn btn-primary px-5"
                type="submit"
              />
            </div>
          </LocalizationProvider>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddModal;
