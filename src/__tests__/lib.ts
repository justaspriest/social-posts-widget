import { Post } from "../index-ns";
import { compareDateEntries, dateFormat } from "../lib/date";
import { mapFeedToPostsData } from "../lib/mass-relevance-mapper";

const TEST_FEED = [
  {
    id: 1,
    created_at: "1",
    text: "t1",
    user: {
      name: "u1",
    },
  },
  {
    id: 2,
    created_at: "2",
    text: "t2",
    user: {
      name: "u2",
    },
  },
];

it("Mass Relevance Mapper", () => {
  const result: Post.Data[] = mapFeedToPostsData(TEST_FEED);
  expect(result).toHaveLength(TEST_FEED.length);
  result.forEach((post, index) => {
    expect(post).toHaveProperty("id", TEST_FEED[index].id);
    expect(post).toHaveProperty("created_at", TEST_FEED[index].created_at);
    expect(post).toHaveProperty("text", TEST_FEED[index].text);
    expect(post).toHaveProperty("userName", TEST_FEED[index].user.name);
  });
});

it("Compare Dates", () => {
  const date1 = "Fri Dec 29 19:15:04 +0000 2017";
  const date2 = "Fri Dec 29 19:15:04 +0000 2017";
  const date3 = "Fri Dec 30 19:15:04 +0000 2017";
  const date4 = "Fri Dec 28 19:15:04 +0000 2017";

  expect(compareDateEntries(date1, date2)).toBe(0);
  expect(compareDateEntries(date1, date3)).toBeLessThan(0);
  expect(compareDateEntries(date1, date4)).toBeGreaterThan(0);
});

it("Date Format", () => {
  const date1 = "Fri Dec 29 19:15:04 +0000 2017";
  const date2 = "RANdOmFri Dec 29 +0000";

  expect(dateFormat(date1)).toEqual(expect.stringMatching(/^\d{2}\.\d{2}.\d{4} \d{2}:\d{2}$/));
  expect(dateFormat(date2)).toEqual(expect.stringMatching("Cannot parse date"));
});
