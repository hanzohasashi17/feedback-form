import React, {useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import {CardTitle, Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useForm} from "@inertiajs/react";

export function CategoryBar({claims}) {
    const {data, setData, post, processing, errors} = useForm({
        category: '',
    })

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
    const CustomToggle = React.forwardRef(({children, onClick}, ref) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
        </a>
    ));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
    const CustomMenu = React.forwardRef(
        ({children, style, className, 'aria-labelledby': labeledBy}, ref) => {
            const [value, setValue] = useState('');

            return (
                <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <Form.Control
                        autoFocus
                        className="mx-3 my-2 w-auto"
                        placeholder="Type to filter..."
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                    <ul className="list-unstyled">
                        {React.Children.toArray(children).filter(
                            (child) =>
                                !value || child.props.children.toLowerCase().startsWith(value),
                        )}
                    </ul>
                </div>
            );
        },
    );

    return (
        <Container className={'mt-10'}>
            <CardTitle>Filter categories</CardTitle>
            <Dropdown className='mt-4'>
                <Dropdown.Toggle as={CustomToggle}>
                    <Button type={'info'}>Categories</Button>
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu}>
                    {claims.map((claim => <Dropdown.Item
                                                         key={claim.id}
                                                         eventKey={claim.category}
                                                         disabled={processing}
                    >{claim.category}</Dropdown.Item>))}
                </Dropdown.Menu>
            </Dropdown>
        </Container>
    );
}
