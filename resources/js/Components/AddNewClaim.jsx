import {useForm} from "@inertiajs/react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import {CardTitle, Container} from "react-bootstrap";

export function AddNewClaim() {
    const {data, setData, post, processing, errors} = useForm({
        title: '',
        message: '',
        category: '',
    })

    function submit(e) {
        e.preventDefault()
        post(route('claim.add'))
    }

    return (
        <Container className='mt-10'>
            <CardTitle>Send new claim</CardTitle>
            <br/>
            <Form onSubmit={submit}>
                <Row md={6}>
                    <Col>
                        <Form.Control
                            size="sm"
                            as="input"
                            placeholder="Category"
                            value={data.category}
                            onChange={e => setData('category', e.target.value)}
                        />
                    </Col>
                </Row>
                <Row md={6} className={'mt-2'}>
                    <Col>
                        <Form.Control
                            size="sm"
                            as="input"
                            placeholder="Title"
                            value={data.title}
                            onChange={e => setData('title', e.target.value)}
                        />
                    </Col>
                </Row>
                <Row md={6} className={'mt-2'}>
                    <Col>
                        <Form.Control
                            size='sm'
                            as="textarea"
                            placeholder="Message"
                            value={data.message}
                            onChange={e => setData('message', e.target.value)}
                        />
                    </Col>
                </Row>
                <Row className={'mt-2'}>
                    <Col xs="auto">
                        <Button type="info" disabled={processing}>
                            Send
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}
