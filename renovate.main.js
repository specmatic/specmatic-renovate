/** @type {import("renovate/dist/config/types").AllConfig} */
module.exports = {
  $schema: "https://docs.renovatebot.com/renovate-schema.json",
  autodiscoverFilter: [
    "specmatic/docs.specmatic.io",
    "specmatic/priospot",
    "specmatic/specmatic-license",
    "specmatic/specmatic-html-reporter",
    "specmatic/specmatic-reporter",
    "specmatic/specamtic",
    "specmatic/specamtic-node",
    "specmatic/specamtic-python",
    "specmatic/enterprise",
    "specmatic/specmatic-insights",
  ],
  prHourlyLimit: 2,
  prConcurrentLimit: 0,
  lockFileMaintenance: {
    enabled: true,
    automerge: true,
    schedule: [ "at any time" ]
  },
  packageRules: [
    {
      matchPackageNames: [
        "gradle",
        "org.assertj:*",
        "org.junit.jupiter:*",
        "org.junit.platform:*",
        "io.specmatic:*",
        "io.specmatic.*:*",
        "org.springframework.*:*",
        "jakarta.validation:*",
        "org.springdoc:*",
        "org.testcontainers:*",
        "com.fasterxml.jackson.*:*",
        "tools.jackson.*:*",
        "renovate",
        "com.squareup.okhttp3:*",
        "net.javacrumbs.json-unit:json-unit-assertj",
        "com.squareup.okio:*",
        "commons-io:commons-io",
        "org.apache.commons:*",
        "org.apache.activemq:activemq*",
        "org.apache.activemq:artemis*"
      ],
      matchUpdateTypes: [
        "minor",
        "patch"
      ],
      automerge: true,
    },
  ],
};
