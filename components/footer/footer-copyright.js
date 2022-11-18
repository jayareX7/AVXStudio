import Image from 'next/image'
import Link from 'next/link'

const FooterCopyright =() => {

    return (
        <>

<footer className="footer footer-copyright">
<div
  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  target="_blank"
  rel="noopener noreferrer"
  style={{color: "#FFF", display: "flex"}}
>
   Powered by{' '}
  <span className="logo">
  <Link href="/" passHref>
    <a>
         <Image src="/vercel.svg" alt="Vercel Logo"  width={72} height={16} />
         </a>

   </Link>
  </span>
</div>
</footer>

</>

    )

}

export default FooterCopyright