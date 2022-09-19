export const Footer: React.FC = () => {
  const title = 'ばりぐっど大学【VGU】';

  return (
    <footer className="text-center">
      <a
        className="text-sm text-gray-500 cursor-pointer"
        href="https://vgu.community/"
        rel="noopener noreferrer"
        target="_blank"
      >
        &copy;2022 {title}
      </a>
    </footer>
  );
};
