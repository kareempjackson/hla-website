"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export const dynamic = "force-static";

export default function StudioPage() {
  // Check if environment variables are set
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
        <div className="max-w-2xl bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            ⚠️ Sanity Configuration Missing
          </h1>
          <p className="text-gray-700 mb-4">
            Please set up your Sanity environment variables:
          </p>
          <div className="bg-gray-100 p-4 rounded mb-4 font-mono text-sm">
            <p>NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"</p>
            <p>NEXT_PUBLIC_SANITY_DATASET="production"</p>
            <p>NEXT_PUBLIC_SANITY_API_VERSION="2024-11-01"</p>
          </div>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              Create a project at{" "}
              <a
                href="https://www.sanity.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                sanity.io
              </a>
            </li>
            <li>
              Create a{" "}
              <code className="bg-gray-100 px-2 py-1 rounded">.env.local</code>{" "}
              file in your project root
            </li>
            <li>Add your Sanity Project ID to the file</li>
            <li>Restart your development server</li>
          </ol>
        </div>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
