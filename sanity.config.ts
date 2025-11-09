import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "default",
  title: "HLA Website",
  basePath: "/studio",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Home Page as a singleton
            S.listItem()
              .title("Home Page")
              .id("homePage")
              .child(
                S.editor()
                  .id("homePage")
                  .schemaType("homePage")
                  .documentId("homePage")
              ),
            // Services Page as a singleton
            S.listItem()
              .title("Services Page")
              .id("servicesPage")
              .child(
                S.editor()
                  .id("servicesPage")
                  .schemaType("servicesPage")
                  .documentId("servicesPage")
              ),
            // About Page as a singleton
            S.listItem()
              .title("About Page")
              .id("aboutPage")
              .child(
                S.editor()
                  .id("aboutPage")
                  .schemaType("aboutPage")
                  .documentId("aboutPage")
              ),
            // Divider
            S.divider(),
            // All other document types
            ...S.documentTypeListItems().filter(
              (listItem) =>
                !["homePage", "servicesPage", "aboutPage"].includes(
                  listItem.getId() || ""
                )
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
