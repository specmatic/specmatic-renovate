/** @type {import("renovate/dist/config/types").AllConfig} */
module.exports = {
  $schema: "https://docs.renovatebot.com/renovate-schema.json",
  rebaseWhen: "behind-base-branch",
  autodiscoverFilter: [
    "specmatic/*{-order-,-sample,-demo}*",
    "!specmatic/arazzo-paris-demo",
    "!specmatic/*iata*",
    "!specmatic/hooks-demo",
  ],
  prHourlyLimit: 1,
  prConcurrentLimit: 1,
  lockFileMaintenance: {
    enabled: true,
    automerge: true,
    automergeType: "pr",
  },
  packageRules: [
    {
      matchUpdateTypes: ["minor", "patch"],
      matchCurrentVersion: "!/^0/",
      automerge: true,
      automergeType: "pr",
    },
  ],
};
