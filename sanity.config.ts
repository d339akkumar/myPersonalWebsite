import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';
const config = defineConfig({
    projectId: "pod2s0ug",
    dataset: "production",
    title: "MY Personal Website",
    apiVersion: "2023-06-22",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types: schemas},
})

export default config;