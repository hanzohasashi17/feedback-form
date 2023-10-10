import Form from 'react-bootstrap/Form';
import {CardTitle} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useForm} from "@inertiajs/react";

export function ResponseForm() {
    const {data, setData, post, processing, errors} = useForm({
        response: '',
    })

    function submit(e) {
        e.preventDefault()
        post(route('claim.response'))
    }

    return (
        <Form onSubmit={submit}>
            <CardTitle>Response to claim</CardTitle>
            <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Message"
                    value={data.response}
                    onChange={e => setData('response', e.target.value)}
                />
            </Form.Group>
            <Button variant="info" type="submit">
                Send
            </Button>
        </Form>
    );
}
