import Footer from "@components/Footer"
import NavBar from "@components/Navbar"
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";


export const metadata = {
  title: "Portfolio",
  description: "Built with Next.js",
  // 👇 Manually add preload for image
  other: {
    'link': [
      {
        rel: 'preload',
        as: 'image',
        href: 'https://camo.githubusercontent.com/2517c544cc49456d65fda2d4d35fdd97efdfd7d40d07169cf25cec587d07a7b4/68747470733a2f2f6c656574636172642e6a61636f626c696e2e636f6f6c2f53616d6172333030373f7468656d653d6c6967687426666f6e743d4375746976652532304d6f6e6f266578743d686561746d6170',
      },
    ],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
