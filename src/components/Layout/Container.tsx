interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto mt-70 min-h-screen max-w-[1280px] px-16 md:px-96 xl:px-160">
      {children}
    </div>
  );
};

export default Container;
