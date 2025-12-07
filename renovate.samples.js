/** @type {import("renovate/dist/config/types").AllConfig} */
module.exports = {
  $schema: "https://docs.renovatebot.com/renovate-schema.json",
  rebaseWhen: "behind-base-branch",
  prHourlyLimit: 10,
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
