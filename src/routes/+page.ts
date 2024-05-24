import { getList } from "$lib/sanity-utils/client";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load = (async () => {
  const blogPosts = await getList();

  if (blogPosts) {
    return {
      blogPosts,
    };
  }

  error(404, "Not found");
}) satisfies PageLoad;
