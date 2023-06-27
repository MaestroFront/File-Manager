import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import fs from "fs";

const fileManagerStart = async () => {
  fs.readFile(`${__dirname}/files/greeting.txt`, "utf8", (err, data) => {
    if (err) throw new Error("Invalid input!");
    const userName = process.argv[2];
    console.log(data + userName.split("=")[1] + '!');
  });
};

await fileManagerStart();
