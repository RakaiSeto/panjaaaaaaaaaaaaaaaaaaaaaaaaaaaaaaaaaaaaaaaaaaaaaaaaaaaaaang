function stringToBinary(text: string): string {
  let binaryString = "";
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    const binary = charCode.toString(2).padStart(8, "0");
    for (let j = 0; j < binary.length; j++) {
      if (binary[j] === "0") {
        binaryString += "a";
      } else {
        // It must be '1'
        binaryString += "A";
      }
    }
  }
  return binaryString.trim();
}

function isValidUrl(string: string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}

export { stringToBinary, isValidUrl };

