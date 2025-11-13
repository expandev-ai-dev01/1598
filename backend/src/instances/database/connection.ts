import sql from 'mssql';
import { config } from '@/config';

/**
 * @summary Database connection pool
 * @description Singleton pattern for database connection management
 */
let pool: sql.ConnectionPool | null = null;

/**
 * @summary Gets or creates database connection pool
 * @rule {be-database-patterns} Connection pooling for optimal resource management
 *
 * @returns Promise resolving to connection pool
 */
export const getPool = async (): Promise<sql.ConnectionPool> => {
  if (!pool) {
    pool = await sql.connect({
      server: config.database.host,
      port: config.database.port,
      user: config.database.user,
      password: config.database.password,
      database: config.database.database,
      options: config.database.options,
    });

    /**
     * @rule {be-error-handling-pattern} Handle connection errors
     */
    pool.on('error', (err) => {
      console.error('Database pool error:', err);
      pool = null;
    });
  }

  return pool;
};

/**
 * @summary Closes database connection pool
 * @description Should be called during application shutdown
 */
export const closePool = async (): Promise<void> => {
  if (pool) {
    await pool.close();
    pool = null;
  }
};
