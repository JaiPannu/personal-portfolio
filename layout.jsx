export const metadata = {
  title: 'Personal Portfolio',
  description: 'Personal portfolio website built with React and Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}