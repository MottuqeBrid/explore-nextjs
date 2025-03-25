"use client";

const Button = () => {
  return (
    <div className="mt-5">
      <button
        className="bg-green-500 px-4 py-1 rounded-2xl"
        onClick={() => console.log("click me")}
      >
        Click Here
      </button>
    </div>
  );
};

export default Button;
