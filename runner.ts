// runner.ts
import { argv } from "process";

async function run() {
  const [,, filePath, input] = argv;

  if (!filePath || !input) {
    console.log("❌ Usage: pnpm solve -- <file-path> <input>");
    console.log("👉 Example: pnpm solve -- strings/find-length 'hello world'");
    return;
  }

  try {
    const module = await import(`./${filePath}.ts`);
    
    // Grab first exported function
    const fn = Object.values(module)[0];

    if (typeof fn !== "function") {
      console.log("❌ No valid function exported from module.");
      return;
    }

    console.clear();

    console.log(`\n===> Input: ${input}`);
    const result = fn(input);
    console.log(`\n===> Output: ${result}`);
  } catch (err) {
    console.error("💥 Error running function:", err);
  }
}

run();
