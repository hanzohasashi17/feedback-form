import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {ClaimCard} from "@/Components/ClaimCard.jsx";
import {Container} from "react-bootstrap";
import s from '@/Components/Claim.module.scss'
import {AddNewClaim} from "@/Components/AddNewClaim.jsx";
import {CategoryBar} from "@/Components/CategoryBar.jsx"
import {ResponseForm} from "@/Components/ResponseForm.jsx";

export default function ResponsePage({ auth, id }) {
    return (
        <AuthenticatedLayout user={auth.user} >
            <Head title="Manager page" />
            <Container className={s.container}>
                <ResponseForm id={id}/>
            </Container>
        </AuthenticatedLayout>
    );
}


