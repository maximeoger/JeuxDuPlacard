module.exports = {
  apps: [
    {
      name: "build.watch.back",
      script: "../../scripts/start_watch.sh",
      cwd: "packages/server",
      exec_interpreter: "bash",
      exec_mode: "fork_mode",
      instances: 1,
      autorestart: true,
      max_memory_restart: "1G"
    },
    {
      name: "Server",
      cwd: "packages/server",
      script: "../../scripts/start_server.sh",
      exec_interpreter: "bash",
      exec_mode: "fork_mode",
      instances: 1,
      watch: ["dist", "../common/dist"],
      autorestart: true,
      watch_delay: 5000,
      max_memory_restart: "1G"
    },
    {
      name: "common",
      cwd: "packages/common",
      interpreter: "bash",
      script: "yarn",
      args: "run build",
      exec_interpreter: "bash",
      exec_mode: "fork_mode",
      instances: 1,
      autorestart: true,
      max_memory_restart: "1G",
    },
    {
      name: "Front",
      cwd: "packages/front",
      interpreter: "bash",
      script: "yarn",
      args: "run dev",
      exec_interpreter: "bash",
      exec_mode: "fork_mode",
      instances: 1,
      max_memory_restart: "1G",
      autorestart: true,
    }
  ]
}