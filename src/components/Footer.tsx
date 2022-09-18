export const Footer: React.FC = () => {
  const title = 'ばりぐっど大学【VGU】';

  const handleClick = () => {
    // if (confirm('外部サイトを開きます。よろしいですか？'))
    window.electronAPI.openVgHouse();
  };

  return (
    <footer className="text-center">
      <p className="text-sm text-gray-500 cursor-pointer" onClick={handleClick}>
        &copy;2022 {title}
      </p>
    </footer>
  );
};
