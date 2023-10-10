import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {ClaimCard} from "@/Components/ClaimCard.jsx";
import {Container} from "react-bootstrap";
import s from '@/Components/Claim.module.scss'
import {AddNewClaim} from "@/Components/AddNewClaim.jsx";
import {CategoryBar} from "@/Components/CategoryBar.jsx"

export default function Claim({ auth, claims, date }) {
    return (
        <AuthenticatedLayout user={auth.user} >
            <Head title="Claim" />
            <AddNewClaim />
            <CategoryBar claims={claims} />
            <Container className={s.container}>
                {claims.map((claim) => {
                    return <ClaimCard date={date} user={auth.user} props={claim} key={claim.id}/>
                })}
            </Container>
        </AuthenticatedLayout>
    );
}


