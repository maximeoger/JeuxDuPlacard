module.exports = {
  apps: [
    {
      name: "common",
      cwd: "packages/common",
      script: "yarn",
      args: "run build",
      instances: 1,
      autorestart: true,
      max_memory_restart: "1G",
    },
    {
      name: "Front",
      cwd: "packages/front",
      script: "yarn",
      args: "run start",
      instances: 1,
      max_memory_restart: "1G",
      autorestart: true,
    },
    {
      name: "Server",
      cwd: "packages/server",
      script: "yarn",
      args: "run start",
      instances: 1,
      watch: ["dist", "../common/dist"],
      autorestart: true,
      watch_delay: 5000,
      max_memory_restart: "1G"
    }
  ]
}