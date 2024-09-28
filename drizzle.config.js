/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://saasdb_owner:z5NV0WwZyklc@ep-twilight-art-a1zl4p5w.ap-southeast-1.aws.neon.tech/vid-gen?sslmode=require'
    }
  };