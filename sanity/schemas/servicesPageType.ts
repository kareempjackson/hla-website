import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export const servicesPageType = defineType({
  name: "servicesPage",
  title: "Services Page",
  type: "document",
  icon: CogIcon,
  initialValue: {
    _id: "servicesPage",
    _type: "servicesPage",
  },
  fields: [
    // Hero Section
    defineField({
      name: "heroSection",
      title: "Hero Section",
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
          name: "ctaText",
          title: "CTA Button Text",
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

    // Service 1: Accrual-Based Bookkeeping
    defineField({
      name: "bookkeepingService",
      title: "Accrual-Based Bookkeeping Service",
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
          type: "text",
          rows: 2,
        },
        {
          name: "deliveryTitle",
          title: "Delivery Section Title",
          type: "string",
        },
        {
          name: "deliveryItems",
          title: "Delivery Items",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "outcome",
          title: "Outcome Text",
          type: "text",
          rows: 2,
        },
        {
          name: "ctaText",
          title: "CTA Button Text",
          type: "string",
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

    // Service 2: Controller-Level Services
    defineField({
      name: "controllerService",
      title: "Controller-Level Services",
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
          type: "text",
          rows: 2,
        },
        {
          name: "offerTitle",
          title: "Offer Section Title",
          type: "string",
        },
        {
          name: "offerItems",
          title: "Offer Items",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "outcome",
          title: "Outcome Text",
          type: "text",
          rows: 2,
        },
        {
          name: "ctaText",
          title: "CTA Button Text",
          type: "string",
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

    // Service 3: Compliance & Risk Management
    defineField({
      name: "complianceService",
      title: "Compliance & Risk Management",
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
          type: "text",
          rows: 2,
        },
        {
          name: "provideTitle",
          title: "Provide Section Title",
          type: "string",
        },
        {
          name: "provideItems",
          title: "Provide Items",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "outcome",
          title: "Outcome Text",
          type: "text",
          rows: 2,
        },
        {
          name: "ctaText",
          title: "CTA Button Text",
          type: "string",
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

    // Service 4: Strategic Add-Ons
    defineField({
      name: "strategicAddons",
      title: "Optional Strategic Add-Ons",
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
          type: "text",
          rows: 2,
        },
        {
          name: "offerTitle",
          title: "Offer Section Title",
          type: "string",
        },
        {
          name: "offerItems",
          title: "Offer Items",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "ctaText",
          title: "CTA Button Text",
          type: "string",
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

    // Service 5: Specialized Services
    defineField({
      name: "specializedServices",
      title: "Specialized Services",
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
          rows: 2,
        },
        {
          name: "provideTitle",
          title: "Provide Section Title",
          type: "string",
        },
        {
          name: "provideItems",
          title: "Provide Items",
          type: "array",
          of: [{ type: "string" }],
        },
        {
          name: "ctaText",
          title: "CTA Button Text",
          type: "string",
        },
        {
          name: "images",
          title: "Gallery Images (4 images)",
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
          validation: (Rule) => Rule.max(4),
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
          name: "subtitle",
          title: "Subtitle",
          type: "text",
          rows: 2,
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
        title: "Services Page",
      };
    },
  },
});
