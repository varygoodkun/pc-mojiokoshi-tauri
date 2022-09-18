export const displayFileSize = (bytes: number) => {
  if (bytes > 1000 * 1000 * 1000) {
    const size = bytes / (1000 * 1000 * 1000);
    return size.toFixed(2) + ' GB';
  } else if (bytes > 1000 * 1000) {
    const size = bytes / (1000 * 1000);
    return size.toFixed(2) + ' MB';
  } else if (bytes > 1000) {
    const size = bytes / 1000;
    return size.toFixed(2) + ' KB';
  } else {
    return bytes + ' B';
  }
};
