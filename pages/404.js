import Link from 'next/link'

export default function FourOhFour() {
    return <>
        <div className="errorPage">
            <h1>404 <br />  Page <span>Not</span> Found !!</h1>
            <Link href="/">
                <a>
                    Go back home
                </a>
            </Link>
        </div>
    </>
}