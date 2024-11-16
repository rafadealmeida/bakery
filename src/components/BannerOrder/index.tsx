import { XMarkIcon } from '@heroicons/react/20/solid';
import { ButtonGradient } from '../ButtonGradient';
import { Banner } from '../Banner';
import { Card } from 'flowbite-react';

export default function BannerOrder() {
  return (
    <Banner.Root
      className="sm:bg-gray-100 items-center lg\:px-0 justify-between min-w-full max-w-full"
      withCicleGradient={false}
    >
      <Banner.Content className="min-w-full flex-row bg-pink-900">
        <div className="flex my-4">
          <div className="w-1/2 flex flex-col items-center justify-center">
            <div className="flex flex-col gap-4">
              <h3 className="text-4xl ">Want custom order?</h3>
              <p>Order now any occasion</p>
            </div>
          </div>
          <div className="flex  flex-row justify-center items-center gap-2 w-1/2">
            <Card
              href="#"
              className="w-40 dark:bg-transparent
              dark:hover:bg-white flex flex-col items-center
              dark:border-white hover:text-pink-400 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
                />
              </svg>

              <h5 className="text-2xl font-bold tracking-tight ">Birthday</h5>
              <a
                href="#"
                className="rounded-2xl border-2 bg-transparent  px-4 py-2.5 text-sm
                font-semibold shadow-sm focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Order Now
              </a>
            </Card>
            <Card
              href="#"
              className="w-40 dark:bg-transparent
              dark:hover:bg-white flex flex-col items-center jus
               dark:border-white hover:text-pink-400 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>

              <h5 className="text-2xl font-bold tracking-tight ">Party</h5>
              <a
                href="#"
                className="rounded-2xl border-2 bg-transparent  px-4 py-2.5 text-sm
                font-semibold shadow-sm focus-visible:outline focus-visible:outline-2
                focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Order Now
              </a>
            </Card>
          </div>
        </div>
      </Banner.Content>
    </Banner.Root>
  );
}
