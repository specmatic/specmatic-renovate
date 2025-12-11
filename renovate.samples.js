/** @type {import("renovate/dist/config/types").AllConfig} */
module.exports = {
  $schema: "https://docs.renovatebot.com/renovate-schema.json",
  // rebaseWhen: "behind-base-branch",
  autodiscoverFilter: [
    "specmatic/*{-order-,-sample,-demo}*",
    "!specmatic/arazzo-paris-demo",
    "!specmatic/*iata*",
    "!specmatic/hooks-demo",
    "!specmatic/specmatic-arazzo-ui-sample",
    "!specmatic/order-service-avro",
  ],
  // throttle creation of new PRs
  prHourlyLimit: 1,
  // maximum number of open PRs at a time
  prConcurrentLimit: 1,
  prCommitsPerRunLimit: 10,
  lockFileMaintenance: {
    enabled: true,
    automerge: true,
  },
  packageRules: [
    {
      matchUpdateTypes: ["minor", "patch"],
      matchCurrentVersion: "!/^0/",
      automerge: true,
    },
    {
      matchManagers: ["github-actions"],
      matchUpdateTypes: ["major", "minor", "patch"],
      automerge: true,
    },
  ],
};
