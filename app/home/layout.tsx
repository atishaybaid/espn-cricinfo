// const HomeLayout = ()=>{

// }


//this would have been renderd on server

export default function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
        <div className="heder">
            Espn cric info branding
        </div>
       {children}
       <div className="footer">
            Reference links
        </div>
      </div>
    );
  }
  