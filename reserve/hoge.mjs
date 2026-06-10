import { join } from "path";
import fs from "fs";

const arr = ["2026-06-08", "2026-06-07", "2026-06-06"];

arr.sort((a, b) => a > b ? -1 : 1);
console.log(arr)