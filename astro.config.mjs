import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Opsfolio",
      social: {
        github: "https://github.com/opsfolio/releases.opsfolio.com",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Resource Surveillance",
          items: [
            { label: "Introduction", link: "/surveilr/introduction" },
            {
              label: "Ingestion",
              items: [
                { label: "Files Ingestion", link: "/surveilr/ingest/files" },
                { label: "Tasks Ingestion", link: "/surveilr/ingest/tasks" },
                {
                  label: "Capturable Executables",
                  link: "/surveilr/ingest/capexec",
                },
                {
                  label: "IMAP Emails Ingestion",
                  link: "/surveilr/ingest/imap",
                },
              ],
            },
            {
              label: "Admin",
              items: [{ label: "Merge", link: "/surveilr/admin/merge" }],
            },
            { label: "Code Notebooks", link: "/surveilr/notebooks/code" },
            {
              label: "UDI",
              items: [
                {
                  label: "PGP",
                  items: [
                    { label: "Introduction", link: "/surveilr/udi/pgp/intro" },
                  ],
                },
              ],
            },
            {
              label: "Concepts",
              items: [{ label: "RSSD", link: "/surveilr/concepts/rssd" }],
            },
			{
				label: "Reference",
				items: [
					{ label: 'Database', items: [
						{ label: 'State Schema', link: '/surveilr/reference/db/schema' },
						{ label: 'Notebook Schema', link: '/surveilr/reference/db/notebook' }
					 ] }
				],
			  },
          ],
        },
      ],
    }),
  ],
});
