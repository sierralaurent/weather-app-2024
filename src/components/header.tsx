import Link from 'next/link'

export default function Header() {
    return(
        <>
        <div className="navbar bg-accent text-neutral-content">
            <Link href='/'><button className="btn btn-ghost text-xl text-black font-bold hover:scale-110 transition-transform">DAS wetter</button></Link>
        </div>
        </>
    )
}