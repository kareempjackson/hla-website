import { defineField, defineType } from "sanity";
import { HomeIcon } from "@sanity/icons";

export const homePageType = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  icon: HomeIcon,
  // Add initial value
  initialValue: {
    _id: "homePage",
    _type: "homePage",
    showBlogPosts: true,
    showHowCanWeHelp: true,
    showOurProcess: true,
  },
  fields: [
    // Hero Section
    defineField({
      name: "heroSection",
      title: "Hero Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "subtitle",
          title: "Subtitle",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          rows: 3,
        },
        {
          name: "ctaText",
          title: "CTA Button Text",
          type: "string",
        },
        {
          name: "heroMedia",
          title: "Hero Media (Image or Video)",
          type: "object",
          fields: [
            {
              name: "mediaType",
              title: "Media Type",
              type: "string",
              initialValue: "image",
              options: {
                list: [
                  { title: "Image", value: "image" },
                  { title: "Video", value: "video" },
                ],
                layout: "radio",
              },
            },
            {
              name: "image",
              title: "Hero Image",
              type: "image",
              options: { hotspot: true },
              hidden: ({ parent }) => parent?.mediaType !== "image",
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative Text",
                },
              ],
            },
            {
              name: "video",
              title: "Hero Video",
              type: "file",
              options: { accept: "video/*" },
              hidden: ({ parent }) => parent?.mediaType !== "video",
            },
            {
              name: "posterImage",
              title: "Video Poster Image (Optional)",
              type: "image",
              options: { hotspot: true },
              hidden: ({ parent }) => parent?.mediaType !== "video",
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative Text",
                },
              ],
            },
          ],
        },
        {
          name: "heroImage",
          title: "Hero Image (Legacy)",
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
          ],
        },
      ],
    }),

    // Why Great Section
    defineField({
      name: "whyGreatSection",
      title: "Why Great Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "problems",
          title: "Problems List",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "description",
          title: "Description",
          type: "text",
          rows: 3,
        },
        {
          name: "consequencesTitle",
          title: "Consequences Title",
          type: "string",
        },
        {
          name: "consequences",
          title: "Consequences List",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "closingText",
          title: "Closing Text",
          type: "text",
          rows: 3,
        },
        {
          name: "image",
          title: "Section Image",
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
          ],
        },
      ],
    }),

    // What We Do Section
    defineField({
      name: "whatWeDoSection",
      title: "What We Do Section",
      type: "object",
      fields: [
        {
          name: "label",
          title: "Label",
          type: "string",
        },
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description1",
          title: "Description Paragraph 1",
          type: "text",
          rows: 2,
        },
        {
          name: "description2",
          title: "Description Paragraph 2",
          type: "text",
          rows: 2,
        },
        {
          name: "ctaButton1",
          title: "CTA Button 1 Text",
          type: "string",
        },
        {
          name: "ctaButton2",
          title: "CTA Button 2 Text",
          type: "string",
        },
        {
          name: "servicesTitle",
          title: "Services Title",
          type: "string",
        },
        {
          name: "services",
          title: "Services",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Service Title",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Service Description",
                  type: "text",
                  rows: 2,
                },
              ],
            },
          ],
        },
        {
          name: "image",
          title: "Section Image",
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
          ],
        },
      ],
    }),

    // How Can We Help Section (enabled/disabled)
    defineField({
      name: "showHowCanWeHelp",
      title: "Show How Can We Help Section",
      type: "boolean",
      initialValue: true,
    }),

    // How Can We Help Section (content)
    defineField({
      name: "howCanWeHelpSection",
      title: "How Can We Help Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "items",
          title: "Industry Cards",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: { hotspot: true },
                  fields: [
                    {
                      name: "alt",
                      type: "string",
                      title: "Alternative Text",
                    },
                  ],
                },
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "text",
                  rows: 3,
                },
              ],
              preview: {
                select: {
                  title: "title",
                  media: "image",
                },
              },
            },
          ],
          validation: (Rule) => Rule.max(6),
        },
        {
          name: "footerTitle",
          title: "Footer Title",
          type: "string",
        },
        {
          name: "footerDescription",
          title: "Footer Description",
          type: "text",
          rows: 2,
        },
      ],
    }),

    // Our Process Section (enabled/disabled)
    defineField({
      name: "showOurProcess",
      title: "Show Our Process Section",
      type: "boolean",
      initialValue: true,
    }),

    // Show Blog Posts Section
    defineField({
      name: "showBlogPosts",
      title: "Show Blog Posts Section",
      type: "boolean",
      initialValue: true,
    }),

    // Testimonial Section
    defineField({
      name: "testimonialSection",
      title: "Testimonial Section",
      type: "object",
      fields: [
        {
          name: "showTestimonials",
          title: "Show Testimonials Section",
          type: "boolean",
          initialValue: true,
        },
        {
          name: "testimonials",
          title: "Testimonials",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "name",
                  title: "Name",
                  type: "string",
                },
                {
                  name: "title",
                  title: "Title/Role",
                  type: "string",
                },
                {
                  name: "organization",
                  title: "Organization",
                  type: "string",
                },
                {
                  name: "quote",
                  title: "Quote",
                  type: "text",
                  rows: 5,
                },
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                  fields: [
                    {
                      name: "alt",
                      type: "string",
                      title: "Alternative Text",
                    },
                  ],
                },
                {
                  name: "socialLinks",
                  title: "Social Links",
                  type: "object",
                  fields: [
                    {
                      name: "twitter",
                      title: "Twitter URL",
                      type: "url",
                    },
                    {
                      name: "linkedin",
                      title: "LinkedIn URL",
                      type: "url",
                    },
                    {
                      name: "instagram",
                      title: "Instagram URL",
                      type: "url",
                    },
                  ],
                },
              ],
              preview: {
                select: {
                  title: "name",
                  subtitle: "organization",
                  media: "image",
                },
              },
            },
          ],
        },
      ],
    }),

    // CTA Section
    defineField({
      name: "ctaSection",
      title: "CTA Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "buttonText",
          title: "Button Text",
          type: "string",
        },
        {
          name: "buttonLink",
          title: "Button Link",
          type: "string",
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Home Page",
      };
    },
  },
});
