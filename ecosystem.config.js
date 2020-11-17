module.exports = {
  apps: [
    {
      name: "Front",
      cwd: "packages/front",
      script: "yarn",
      args: "run dev",
      instances: 1,
      max_memory_restart: "1G"
    },
    {
      name: "Server",
      cwd: "packages/server",
      script: "yarn",
      args: "run dev",
      instances: 1,
      watch: true,
      max_memory_restart: "1G"
    }
  ]
}