module.exports = {
  apps: [
    // {
    //   name: "build.watch.back",
    //   script: "../../scripts/start_watch.sh",
    //   cwd: "packages/back",
    //   exec_interpreter: "bash",
    //   exec_mode: "fork_mode",
    //   instances: 1,
    //   autorestart: true,
    //   max_memory_restart: "1G"
    // },
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
      name: "start.database",
      script: "../../../scripts/start_db.sh",
      cwd: "packages/server/docker",
      exec_interpreter: "bash",
      exec_mode: "fork_mode",
      instances: 1,
      autorestart: true,
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
      env: {
        NODE_ENV: "development",
        REACT_APP_API_URL: "http://localhost:3002",
      },
      script: "yarn",
      args: "run start",
      exec_interpreter: "bash",
      exec_mode: "fork_mode",
      instances: 1,
      max_memory_restart: "1G",
      autorestart: true,
    }
  ]
}