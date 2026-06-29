const LoadingIcon = () => {
  return (
    <>
      <div className="flex space-x-2 justify-center items-centre h-screen dark-inver mt-10">
        <div className="h-5 w-5 bg-blue rounded-full animate-bounce [animation-delay:-0.3s]" />

        <div className="h-5 w-5 bg-blue rounded-full animate-bounce [animation-delay:-0.15s]" />

        <div className="h-5 w-5 bg-blue rounded-full animate-bounce [animation-delay:-0.3s]" />
      </div>
    </>
  );
};

export default LoadingIcon;
