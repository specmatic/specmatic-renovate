/** @type {import("renovate/dist/config/types").AllConfig} */
module.exports = {
  $schema: "https://docs.renovatebot.com/renovate-schema.json",
  autodiscoverFilter: [
    "specmatic/*",
    "!specmatic/*{-order-,-sample,-demo}*",
    "!specmatic/aws-lambda-kafka-with-localstack",
    "!specmatic/arazzo-paris-demo",
    "!specmatic/*iata*",
    "!specmatic/tools.openapis.org",
    "!specmatic/specmatic.io",
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
        "org.apache.commons:*"
      ],
      matchUpdateTypes: [
        "minor",
        "patch"
      ],
      automerge: true,
    },
  ],
};
