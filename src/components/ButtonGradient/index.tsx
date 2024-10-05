import classNames from 'classnames';

interface ButtonGradientProps {
  children: string;
  link?: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export const ButtonGradient = ({
  children,
  link,
  className = '',
  variant = 'primary',
}: ButtonGradientProps) => {
  const buttonClass = classNames(
    'py-2.5 px-7 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    {
      'bg-gradient-to-r from-pink-500 to-pink-900 text-white hover:from-pink-900 hover:to-pink-500 focus-visible:outline-pink-900':
        variant === 'primary',

      'border-2 border-gray-50 text-gray-50 hover:border-gray-200 hover:text-gray-200 focus-visible:outline-gray-50':
        variant === 'secondary',
    },
    className,
  );

  return (
    <div
      className={classNames(
        'mt-10 flex items-center justify-center gap-x-6 lg:justify-start',
        className,
      )}
    >
      <a href={link ? link : '#'} className={buttonClass}>
        {children}
      </a>
    </div>
  );
};
