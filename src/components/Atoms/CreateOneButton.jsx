import Link from "next/link";
export const CreateOneButton = () => {
  return (
    <div>
      <p className="text-mb mb-1">No account?</p>
      <Link href="/sign_up">
        <button
          className="text-xs px-5 py-2 mb-8 rounded-full 
          border border-white dark:border-gray-400 focus:outline-none 
          bg-gradient-to-tr 
        from-green-400 dark:from-gray-900 
        to-blue-400 dark:to-purple-800
          cursor-pointer  hover:opacity-60 dark:hover:opacity-50"
        >
          Create one
        </button>
      </Link>
    </div>
  );
};
