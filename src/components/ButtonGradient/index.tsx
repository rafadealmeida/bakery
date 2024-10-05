export const ButtonGradient = ({
  children,
  link,
}: {
  children: string;
  link?: string;
}) => {
  return (
    <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start ">
      <a
        href={link ? link : '#'}
        className="bg-gradient-to-r from-pink-500 to-pink-900  text-white py-2.5 px-7 text-sm font-semibold  shadow-sm hover:bg-pink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-900"
      >
        {children}
      </a>
    </div>
  );
};
