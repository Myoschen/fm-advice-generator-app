type AttributionProps = {
  author: string;
  link: string;
};

export default function Attribution({ author, link }: AttributionProps) {
  return (
    <div className="text-xs md:text-sm font-manrope text-center">
      Challenge by{' '}
      <a
        className="underline hover:text-neon-green-500 transition-colors duration-300 ease-in-out"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        className="underline hover:text-neon-green-500 transition-colors duration-300 ease-in-out"
        href={link}
        target="_blank"
      >
        {author}
      </a>
      .
    </div>
  );
}
