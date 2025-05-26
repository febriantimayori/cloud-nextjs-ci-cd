import { Poppins } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";

const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ["latin"],
});

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    console.log("🔥 CI/CD version 2");
  }, []);

  return (
    <>
      <Head>
        <title>Cloud Computing | Week 12</title>
        <meta name="description" content="Praktikum Cloud Computing Week 12 - CI/CD dengan Azure App Service" />
        <meta name="keywords" content="Cloud Computing, Azure, CI/CD, App Service" />
        <meta name="author" content="Febrianti Mayori" />
      </Head>
      <main
        className={poppins.className}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
          color: '#333',
          padding: '20px',
          margin: '0 auto',
          textAlign: 'center',
          maxWidth: '800px',
        }}
      >
        <h1
          style={{
            fontWeight: 700,
            fontSize: '2.2rem',
            marginBottom: '20px',
            opacity: show ? 1 : 0,
            transform: show ? 'scale(1)' : 'scale(0.8)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          CI/CD Berhasil Otomatisasi! ✨
        </h1>
        <p
          style={{
            fontWeight: 400,
            fontSize: '1.2rem',
            opacity: show ? 1 : 0,
            transform: show ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
          }}
        >
          Praktikum Cloud Computing Week 12: Aplikasi Next.js ini sudah terdeploy otomatis ke Azure App Service menggunakan GitHub Actions.
        </p>
        <p
          style={{
            marginTop: '30px',
            fontWeight: 500,
            fontSize: '1rem',
            opacity: show ? 1 : 0,
            transition: 'opacity 0.6s ease 0.6s',
          }}
        >
          Dibuat oleh: <strong>Febrianti Mayori</strong>
        </p>
      </main>
    </>
  );
}