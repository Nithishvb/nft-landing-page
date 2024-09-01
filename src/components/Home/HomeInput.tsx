const HomeInput = () => {
  return (
    <div className="border border-2 border-white rounded-full w-[550px] h-[82px] m-auto text-center flex justify-center">
      <input
        type="email"
        placeholder="Input your mail..."
        className="bg-transparent outline-none text-white mr-auto pl-10 text-[18px]"
      />
      <button className="h-[100%] bg-white rounded-full w-[200px] text-[#293241] text-[20px] font-bold">
        Try for Free
      </button>
    </div>
  );
};

export default HomeInput;
