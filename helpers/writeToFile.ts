import fs from "fs";
export default function writeToFile<T>(data: T, fileName: string) {
  fs.writeFile(
    `./fixtures/${fileName}.json`,
    JSON.stringify(data, null, 2),
    (err) => {
      if (err) {
        console.error(err);
        throw new Error("Error writing to file.");
      }
    }
  );

  return `${fileName}.json was created`;
}
