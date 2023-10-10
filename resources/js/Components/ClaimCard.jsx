import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import s from '@/Components/Claim.module.scss'
import {Link} from "@inertiajs/react";

export function ClaimCard({props, user, date}) {
    const now = new Date()
    return (
        <Card className={s.card}>
            <Card.Header as="h5">{props.category}</Card.Header>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text><b>{props.user_name}</b> posted on {props['created_at'].slice(0, 10)} {props['created_at'].substring(16, 11)}</Card.Text>
                <Card.Text><b>Email:</b> {props.user_email}</Card.Text>
                <Card.Text><b>Message:</b> {props.message}</Card.Text>
                {props.response ? <Card.Text><b>Manager response:</b> {props.response}</Card.Text> : ''}
                {user['user_role'] === 'manager' ? <Button variant={'info'}><Link href={`/manager/${props.id}`} >Response</Link></Button> : null}
            </Card.Body>
        </Card>
    );
}
