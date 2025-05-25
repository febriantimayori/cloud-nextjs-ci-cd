import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Cloud Computing | Week 12</title>
        <meta name="description" content="Praktikum Cloud Computing Week 12 - CI/CD with Azure App Service" />
        <meta name="keywords" content="Cloud Computing, Azure, CI/CD, App Service" />
        <meta name="author" content="Your Name" />
      </Head>
      <div className={poppins.className} style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>CI/CD ke Azure App Service</h1>
        <p>Ini adalah aplikasi Next.js sederhana untuk praktikum</p>
      </div>
    </>
  );
}