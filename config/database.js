module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "ec2-3-226-163-72.compute-1.amazonaws.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "d1osiokq71q2gu"),
      user: env("DATABASE_USERNAME", "vwrwuhytthcsyd"),
      password: env(
        "DATABASE_PASSWORD",
        "4387c8e6e69263a278864a22f4c0f8c57c1e258e7fcaf117a0f7f2cb816c7426"
      ),
      ssl: { rejectUnauthorized: false },
    },
    debug: false,
  },
});
