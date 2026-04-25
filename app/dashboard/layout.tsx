import Sidenav from "@/app/ui/dashboard/sidenav";

// layout component that receives children prop. This childr can either be a page or another layout. In this case the pages inside /dashboard will automatically be nested inside a Layout

// this wraps every page with consisten sidebar + content structure
// { children }: { children: React.ReactNode }
// children is whatever you put inside <Layout> when you use it:
// It's typed as React.ReactNode, which accepts anything renderable — components, text, JSX, arrays, etc.

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <Sidenav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
