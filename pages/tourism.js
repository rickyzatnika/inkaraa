/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';

const tourism = () => {

    const router = useRouter();

    return (
        <div className='tourism'>
            <div className="box-error">
                <h1>SORRY</h1><hr />
                <h3>Page Maintenance</h3>
                <Button className='btn-warning btn-lg text-white' onClick={() => router.push('/')}>Back to Home</Button>
            </div>
        </div>
    )
}

export default tourism