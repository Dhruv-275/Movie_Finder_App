import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter,  } from "react-icons/fa";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Message Sent! Thank you, ${formData.email}`);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section 
            id="contact" 
            className="py-5" 
            style={{ background: "linear-gradient(to bottom,rgb(255, 255, 255),rgb(3, 39, 158))", minHeight: "100vh", padding: "40px 0" }}
        >
            <Container>
                <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
                <Row className="g-4">

                    <Col md={6}>
                        <h4>Get In Touch</h4>
                        <p><FaInstagram/> <strong></strong><a href="https://www.instagram.com/dhruv_chauhan_275?igsh=MWJyemRtazFsYjBjeA==">Instagram</a></p>
                        <p><FaTwitter /> <strong></strong><a href="https://www.facebook.com/rajpuatdhruvchauhan.chauhan?mibextid=ZbWKwL">Twitter</a></p>
                        <p><FaFacebook /> <strong></strong><a href="https://www.facebook.com/rajpuatdhruvchauhan.chauhan?mibextid=ZbWKwL">Facebook</a></p>
                        <p><FaEnvelope /> <strong>Email:</strong> dhruv03chauhan@gmail.com</p>
                    </Col>

                    <Col md={6}>
                        <h4>Send Us A Message</h4>
                        <Form 
                            onSubmit={handleSubmit} 
                            style={{ background: "rgba(255, 255, 255, 0.8)", padding: "20px", borderRadius: "10px" }}
                        >
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your name"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    placeholder="Your message..."
                                    required
                                />
                            </Form.Group>
                            <Button variant="warning" type="submit">Send Message </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactUs;
