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
  prHourlyLimit: 3,
  // maximum number of open PRs at a time
  prConcurrentLimit: 0,
  prCommitsPerRunLimit: 10,
  lockFileMaintenance: {
    enabled: true,
    automerge: true,
    schedule: [ "at any time" ]
  },
  packageRules: [
    {
      matchUpdateTypes: ["minor", "patch", "lockFileMaintenance"],
      automerge: true,
    },
    {
      matchManagers: ["github-actions"],
      matchUpdateTypes: ["major", "minor", "patch"],
      automerge: true,
    },
  ],
};
