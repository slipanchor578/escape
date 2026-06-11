import { readdir } from "fs/promises";

try {
    const files = await readdir(".");

    for (const file of files) {
        console.log(file);
    }
} catch (err) {
    console.error(err);
}