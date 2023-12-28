export function getRandomRGBColor(): string {
  // Generate random values for red, green, and blue components
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Check if the color is white or black
  const isWhite = red === 255 && green === 255 && blue === 255;
  const isBlack = red === 0 && green === 0 && blue === 0;

  // Ensure the color is not white or black
  if (isWhite || isBlack) {
    // If it's white or black, recursively call the function again
    return getRandomRGBColor();
  }

  // Return the RGB color as a string
  return `rgb(${red}, ${green}, ${blue})`;
}

export function resetColor(): string {
  return 'rgb(255, 255, 255)';
}
