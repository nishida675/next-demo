import Link from "next/link"

const Header = () => {
    return (
        <header className="bg-black py-5">
            <div className="container mx-auto flex justify-start gap-x-16">
                <Link href="/" className="text-white">Nextjs超初心者入門</Link>
                <ul className="flex gap-3">
                    <li>
                        <Link href="/about" className="text-white">About</Link>
                    </li>
                    <li>
                        <Link href="/blog" className="text-white">Blog</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-white">Contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header