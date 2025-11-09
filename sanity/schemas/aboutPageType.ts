import { defineField, defineType } from "sanity";
import { InfoOutlineIcon } from "@sanity/icons";

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  icon: InfoOutlineIcon,
  initialValue: {
    _id: "aboutPage",
    _type: "aboutPage",
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
          name: "description",
          title: "Description",
          type: "text",
          rows: 3,
        },
        {
          name: "primaryButtonText",
          title: "Primary Button Text",
          type: "string",
        },
        {
          name: "secondaryButtonText",
          title: "Secondary Button Text",
          type: "string",
        },
        {
          name: "heroImage",
          title: "Hero Image",
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

    // Mission & Vision Section
    defineField({
      name: "missionSection",
      title: "Mission & Vision Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description1",
          title: "Description Paragraph 1",
          type: "text",
          rows: 4,
        },
        {
          name: "description2",
          title: "Description Paragraph 2",
          type: "text",
          rows: 4,
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

    // Who We Serve Section
    defineField({
      name: "whoWeServeSection",
      title: "Who We Serve Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "introduction",
          title: "Introduction Text",
          type: "text",
          rows: 2,
        },
        {
          name: "clientTypes",
          title: "Client Types",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Client Type Title",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "text",
                  rows: 2,
                },
              ],
            },
          ],
        },
        {
          name: "closingText",
          title: "Closing Text",
          type: "text",
          rows: 2,
        },
        {
          name: "primaryButtonText",
          title: "Primary Button Text",
          type: "string",
        },
        {
          name: "secondaryButtonText",
          title: "Secondary Button Text",
          type: "string",
        },
        {
          name: "images",
          title: "Image Grid (3 images)",
          type: "array",
          of: [
            {
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
          validation: (Rule) => Rule.max(3),
        },
      ],
    }),

    // Our Approach Section
    defineField({
      name: "approachSection",
      title: "Our Approach Section",
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
          name: "description",
          title: "Description",
          type: "text",
          rows: 2,
        },
        {
          name: "primaryButtonText",
          title: "Primary Button Text",
          type: "string",
        },
        {
          name: "secondaryButtonText",
          title: "Secondary Button Text",
          type: "string",
        },
        {
          name: "features",
          title: "Features",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "additionalInfo",
          title: "Additional Information Paragraphs",
          type: "array",
          of: [{ type: "text", rows: 2 }],
        },
        {
          name: "bottomText",
          title: "Bottom Text",
          type: "text",
          rows: 2,
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

    // Team Section
    defineField({
      name: "teamSection",
      title: "Leadership & Team Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
        },
        {
          name: "teamMembers",
          title: "Team Members",
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
                  name: "role",
                  title: "Role",
                  type: "string",
                },
                {
                  name: "photo",
                  title: "Photo",
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
                  name: "quote",
                  title: "Quote",
                  type: "string",
                },
                {
                  name: "bio",
                  title: "Bio",
                  type: "text",
                  rows: 3,
                },
                {
                  name: "twitterUrl",
                  title: "Twitter URL",
                  type: "url",
                },
                {
                  name: "linkedinUrl",
                  title: "LinkedIn URL",
                  type: "url",
                },
                {
                  name: "instagramUrl",
                  title: "Instagram URL",
                  type: "url",
                },
              ],
              preview: {
                select: {
                  title: "name",
                  subtitle: "role",
                  media: "photo",
                },
              },
            },
          ],
        },
      ],
    }),

    // Testimonials Section
    defineField({
      name: "testimonialsSection",
      title: "Testimonials Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Section Title",
          type: "string",
        },
        {
          name: "showTestimonials",
          title: "Show Testimonials Section",
          type: "boolean",
          initialValue: true,
        },
      ],
    }),

    // CTA Section
    defineField({
      name: "ctaSection",
      title: "Call to Action Section",
      type: "object",
      fields: [
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
        {
          name: "buttonText",
          title: "Button Text",
          type: "string",
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "About Page",
      };
    },
  },
});
