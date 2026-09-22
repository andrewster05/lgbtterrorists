import { cp, rm } from "node:fs/promises";
import * as esbuild from 'esbuild';

await rm('build', {
    recursive: true,
    force: true,
});

await cp('public', 'build', {
    recursive: true,
});

const watch = process.argv[2] === "watch";

const ctx = await esbuild.context({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    minify: true,
    sourcemap: true,
    target: ['es2020'],
    outdir: 'build',
    loader: {
        '.png': 'file',
        '.jpg': 'file',
        '.svg': 'file',
        '.mp4': 'file',
    },
    define: {
        'process.env.NODE_ENV': watch ? '"development"' : '"production"',
    },
});

if (watch) {
    console.log(">> watching");
    await ctx.watch();
    let { port } = await ctx.serve({
        host: '127.0.0.1',
        servedir: 'build',
        fallback: 'build/index.html',
    });
    console.log(`Listening on http://127.0.0.1:${port}`);
} else {
    console.log(">> rebuild");
    await ctx.rebuild();
    await ctx.dispose();
}
